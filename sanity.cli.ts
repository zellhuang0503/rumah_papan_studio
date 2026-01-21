import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'pt01rhvf',
        dataset: 'production'
    },
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    deployment: {
        appId: 'xeum8safy0rdrg6vaqjq29hw',
        autoUpdates: true,
    }
})
