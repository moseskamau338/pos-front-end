<template>
  <section class="border border-gray-300 focus-within:ring focus-within:ring-green-500 bg-white dark:bg-brand-night-box rounded shadow-md">
    <div class="px-5 border-b border-t mx-4 my-2 py-2 flex flex-shrink-0 items-center space-x-2 overflow-x-auto">
      <template :key="index" v-for="(menu, index) in menus">
        <span v-if="menu.breakpoint">
          <i class="fa-duotone opacity-50 fa-pipe"></i>
        </span>
        <span :title="menu.name" v-else-if="editor" @click="menu.action" class="cursor-pointer hover:font-bold text-gray-500 dark:text-gray-300 hover:bg-gray-200 h-8 w-8 p-2 flex items-center justify-center rounded-full transition-all"
        :class="{'bg-gray-200 dark:bg-gray-600' : (menu.checkActive && menu.checkActive()) ||editor.isActive(menu.name.toLowerCase())}"
        >
          <i class="fa-solid text-sm" :class="[
              menu.icon,
              (menu.checkActive && menu.checkActive()) || editor.isActive(menu.name.toLowerCase())? 'font-semibold' : 'font-light'
              ]"></i>
        </span>

      </template>
        <!--Popup forms-->
        <form v-if="linkForm.show" @submit.prevent class="absolute mt-32 z-50 border shadow-lg rounded bg-white dark:bg-brand-night-box px-3 py-3">
          <!--Link form-->
          <small class="text-xs font-semibold">Set link</small>
           <input type="text" v-model="linkForm.url" name="url" class="mt-2 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded placeholder-gray-400 leading-none text-xs py-0.5" placeholder="URL" />
            <div class="mt-4 flex justify-end">
              <c-button @click="() => {if(linkForm.url.length > 0){
                editor.commands.setLink({ href: linkForm.url }); linkForm.show=false;}}" class="py-0.5" variant="success">Save</c-button>
            </div>
        </form>
    </div>
    <editor-content :editor="editor"></editor-content>
  </section>
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Mention from '@tiptap/extension-mention'
import suggestion from "@/components/elements/EditorMentions/suggestion";

import StarterKit from '@tiptap/starter-kit'

import {onBeforeUnmount, ref, watch} from "vue";
import {TextAlign} from "@tiptap/extension-text-align";
import CButton from "@/components/elements/CButton.vue";
export default {
name: "Editor",
  components:{
    CButton,
    EditorContent
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, {emit}){
   const editor = useEditor({
      content: props.modelValue,
     editorProps: {
        attributes: {
          class: 'prose prose-slate focus:outline-none px-4 py-2 dark:text-white',
        },
      },
      extensions: [
          Underline,
          Link.configure({
            HTMLAttributes: {
              class: 'text-green-600',
            },
          }),
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3],
            },
          }),
          TextAlign.configure({
            alignments: ['left', 'center', 'right'],
              types: ['heading', 'paragraph'],
          }),
          Mention.configure({
            HTMLAttributes: {
              class: 'text-green-700 dark:text-green-500 font-bold',
            },
            suggestion
        })
      ],
      onUpdate: () => {
        // HTML
        emit('update:modelValue', editor.value.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
     const menus = ref([
      {icon:'fa-bold', name:'Bold', action:() => {editor.value.chain().focus().toggleBold().run()}},
      {icon:'fa-italic', name:'Italic', action:() => {editor.value.chain().focus().toggleItalic().run()}},
      {icon:'fa-underline', name:'Underline', action:() => { editor.value.commands.toggleUnderline() }},
      {icon:'fa-link-simple', name:'Link', action:() => { setLink() }},
      {icon:'fa-link-simple-slash', name:'Link', action:() => { editor.value.chain().focus().unsetLink().run() }},
      {icon:'fa-strikethrough', name:'Strike', action:() => { editor.value.commands.toggleStrike() }},
      {breakpoint: true},
      {icon:'fa-h1', name:'H1',
        action:() => { editor.value.commands.toggleHeading({ level: 1 }) },
        checkActive: () => {return editor.value.isActive('heading', { level: 1 })},
      },
      {icon:'fa-h2', name:'H2',
        action:() => { editor.value.commands.toggleHeading({ level: 2 }) },
        checkActive: () => {return editor.value.isActive('heading', { level: 2 })},
      },
       {icon:'fa-h3', name:'H3',
          action:() => { editor.value.commands.toggleHeading({ level: 3 }) },
          checkActive: () => {return editor.value.isActive('heading', { level: 3 })},
        },
      {breakpoint: true},
      {icon:'fa-align-left', name:'text-left',
        action:() => { editor.value.commands.setTextAlign('left') },
        checkActive: () => {return editor.value.isActive({ textAlign: 'left' })},
      },
      {icon:'fa-align-center', name:'text-center',
        action:() => { editor.value.commands.setTextAlign('center') },
        checkActive: () => {return editor.value.isActive({ textAlign: 'center' })},
      },
      {icon:'fa-align-right', name:'text-right',
        action:() => { editor.value.commands.setTextAlign('right') },
        checkActive: () => {return editor.value.isActive({ textAlign: 'right' })},
      },

    ])
    let linkForm = ref({
      show:false,
      text:'',
      url:''
    })

    const getSelectedText = () => {
        const { from, to, empty } = editor.value.state.selection

        if (empty) {
            return null
        }

        return editor.value.state.doc.textBetween(from, to, ' ')
    }
    const setLink = () =>{
       linkForm.value.text = getSelectedText()

      if (linkForm.value.text){
        linkForm.value.show = true
      }
    }


    watch(() => props.modelValue, (newValue) => {
        // HTML
        const isSame = editor.value.getHTML() === newValue

        // JSON
        // const isSame = JSON.stringify(editor.value.getJSON()) === JSON.stringify(newValue)
        if (isSame) {return}

        editor.value.commands.setContent(newValue, false)
    });

    onBeforeUnmount(() => {
      editor.value.destroy()
    })

    return {editor, menus, linkForm}
  }
}
</script>

<style scoped>

</style>