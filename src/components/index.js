import { buttons } from './buttons'
import { customElements } from './custom-elements'

import MachineBox from './MachineBox.vue'
import Machines from './Machines.vue'
import PageWithTabs from './PageWithTabs.vue'
import Welcome from './Welcome.vue'
import PageTitle from './custom-elements/PageTitle.vue'

export default [
    ...buttons,
    ...customElements,
    [MachineBox, Machines, PageWithTabs, Welcome, PageTitle]
]
