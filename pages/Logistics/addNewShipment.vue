<script>
export default  {
  data() {
    return {
      shipment: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        mobileNumber2: "",
        wilaya: "",
        city: "",
        fullAdress: "",
        deliveryType: "",
        cost: "",
      },
    }
  },
}
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 first Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="shipment.firstName"
              placeholder="Mohamed "
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >Last Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="lastName"
              v-model="shipment.lastName"
              placeholder="Harzallah"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 Phone number 1 -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="shipment.mobileNumber"
              type="number"
              placeholder="056623558"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 Phone number 2 -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile 2</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="shipment.mobileNumber2"
              type="number"
              placeholder="0545263520"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 Wilaya -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="wilaya"
            >Wilaya</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="wilaya "
              v-model="shipment.wilaya"
              type="wilaya"
              placeholder="Blida"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="City"
            >City</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="City "
              v-model="shipment.city"
              type="city"
              placeholder="Ouladyaich"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 Full Adress -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="fullAdress"
            >Full Adress</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="fullAdress "
              v-model="shipment.fullAdress"
              type="fullAdress"
              placeholder="Villa n 03 route de rays"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <!-- 👉 Delivery Type -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="deliveryType"
            >Delivery Type</label>
          </VCol>

          <VRadioGroup
            v-model="shipment.deliveryType"
            inline
          >
            <VRadio
              label="Home"
              value="home"
            />
            <VRadio
              label="Office"
              value="office"
            />
          </VRadioGroup>
        </VRow>
      </VCol>
      <!-- 👉 submit and reset button -->
      <VCol class="d-flex gap-4">
        <VBtn
          type="submit"
          color="#4CAF50"
        >
          Add new Shipment
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
