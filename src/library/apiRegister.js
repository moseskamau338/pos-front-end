export const apiRoutes = {
    /**
     * @Note: do not add a trailing forward slash
     * */
    //UAC APIs
    group:'/config/permissions/group',
    role:'/config/permissions/role',
    assign_group_role:'/config/permissions/assign_group_role',
    assign_user_group:'/config/permissions/assign_user_group',
    invite_user:'/config/permissions/invite_user',
    users:'/config/permissions/users',

    //SOTE
    ocr_upload:'/v1/recon/upload_document', // add /type
    post_to_erp:'/v1/recon/post_to_erp',
    get_ocr_results:'/v1/recon/invoicing/details',
    update_ocr_results: '/v1/recon/repair_invoice',

    // erps
    erps: '/v1/available_erps',
    erp_onboard: '/v1/company_onboarding',
    integrations: '/v1/company/integrations',

    //recon
    recon_invoices: '/v1/accounting_documents',
    allocations: '/v1/allocations',
    match_dematch:'/v1/recon/reconcile_invoice',

    // marketplace
    get_clients: "/v1/recon/vendors_customers", // get a vendor's clients
    get_client_invoices: "/v1/accounting_documents",
    update_adj_status: "v1/recon/adjustment",
    
    // shipping
    get_jobs: "/v1/recon/invoicing", // to get a job's details, add a query param to the above url: v1/recon/invoicing?id=1234567
    get_invoice_details: "/v1/recon/invoicing/details", // v1/recon/invoicing/details?id=2345-6767-3456-3157
    fx_rate: '/v1/recon/fx',

    //rules
    rules: '/v1/recon/rules', // must add company ID: /v1/recon/rules/{company_id}
    adjustments:'/v1/recon/adjustment', // i.e /c83086ea-36bd-4213-9685-c483d24dc45d?type=credit_note

    //remittances
    remittance:'/v1/recon/remittance_advice', //add company ID

    //data mapping
    mappings: '/v1/recon/data_maping',
}