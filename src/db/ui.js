/*
* This store manages all user preferences for the UI
* */
import { defineStore } from "pinia";

export const useUiStore = defineStore('uiStore', {
    persist: {enabled:true},
    state: ()=>{
        return {
            theme: false,
            cookie_consent: false,
            sidebarExpanded: true,
            activeMenu: 'Dashboard',
            minimize_recon_stats:true,
        }
    },
    actions:{
        init(){
            this.changeTheme(this.theme? 'dark' : 'light');
        },
        toggleCookie(){
            this.cookie_consent = !this.cookie_consent
        },
        isSidebarOpen(){
          return this.sidebarExpanded && this.activeMenu.toLowerCase() !== 'pos'
        },
        changeTheme(theme){
            if (theme === 'dark'){
                document.documentElement.classList.add(theme)
            }else{
                document.documentElement.classList.remove('dark')
            }
        },
        toggleCollapse(){
            this.sidebarExpanded = !this.sidebarExpanded
        }
    }
})