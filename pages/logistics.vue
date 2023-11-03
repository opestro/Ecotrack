<script>
import LogisticsCardStatistics from '@/components/logistics/LogisticsCardStatistics.vue'
import LogisticsDeliveryExpectations from '@/components/logistics/LogisticsDeliveryExpectations.vue'
import LogisticsDeliveryPerformance from '@/components/logistics/LogisticsDeliveryPerformance.vue'
import LogisticsShipmentStatistics from '@/components/logistics/LogisticsShipmentStatistics.vue'
import LogisticsVehicleOverview from '@/components/logistics/LogisticsVehicleOverview.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <LogisticsCardStatistics />
      <VRow>
        <VCol
          cols="6"
          md="6"
        >
          <LogisticsVehicleOverview />
        </VCol>

        <VCol
          cols="6"
          md="6"
        >
          <LogisticsShipmentStatistics />
        </VCol>
      </VRow>

      <VRow>
        <VCol
          cols="12"
          md="4"
        >
          <LogisticsDeliveryPerformance />
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <LogisticsDeliveryExpectations />
        </VCol>
      </VRow>
    </vcol>
  </VRow>
</template>
