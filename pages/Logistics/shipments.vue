<script>
import DemoDataTableKitchenSink from '@/components/logistics/DemoDataTableKitchenSink.vue'
import { IconCubeOff, IconCubePlus } from '@tabler/icons-vue'
import AddNewShipment from './addNewShipment.vue'

export default {
  components: { IconCubePlus, AddNewShipment, IconCubeOff },

  data() {
    return {
      AddNewShipmentCard: false,
    }
  },
  methods: {
    statuChange(){
      this.AddNewShipmentCard = !this.AddNewShipmentCard
    },
  },
}
</script>

<template>
  <div>
    <!-- ADD Button  -->
    <VRow
      v-show="!AddNewShipmentCard"
      class="pa-2 ma-2"
      justify="end"
      align="end"
    >
      <VBtn
        rounded="md"
        color="#1697F6"
        @click="statuChange"
      >
        <IconCubePlus class="mx-2 pa-1" />
        Add New Shipment
      </VBtn>
    </VRow>
    <!-- Cancel Button  -->
    <VRow
      v-show="AddNewShipmentCard"
      class="pa-2 ma-2"
      justify="end"
      align="end"
    >
      <VBtn
        rounded="md"
        color="#D50000"
        @click="statuChange"
      >
        <IconCubeOff class="mx-2" />
        Cancel
      </VBtn>
    </VRow>
    <!-- ADD Section  -->
    <VRow
      v-show="AddNewShipmentCard"
      justify="center"
    >
      <VCard class="ma-5 pa-5">
        <AddNewShipment />
      </VCard>
    </VRow>
    <!-- Data Table  -->
    <VCol cols="12">
      <DemoDataTableKitchenSink />
    </VCol>
  </div>
</template>
