<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { collection } from 'firebase/firestore'

const nuxtApp = useNuxtApp()
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
       
      },
      test: "test",
      isPasswordVisible: false,
    }
  },
  methods: {
    async AddNewUser(){
      try {
        await createUserWithEmailAndPassword(       
          nuxtApp.$auth, 
          this.form.email, 
          this.form.password ).then(
          data=>{ 
            console.log( data.user.uid )
            
            nuxtApp.$firestore
            collection("Profiles").get().then(dad => {
              console.log("Document successfully written!" + dad)
            })
              .catch(error => {
                console.error("Error writing document: ", error)
              })
          },
        )
      } catch (error) { alert(error)}
    },
  },
}
</script>

<template>
  <VRow>
    <!-- 👉 First Name -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.firstName"
        label="First Name"
        placeholder="Ahmed"
      />
    </VCol>

    <!-- 👉 Last Name -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.lastName"
        label="Last Name"
        placeholder="Ben ..."
      />
    </VCol>

    <!-- 👉 Email -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.email"
        label="Email"
        placeholder="Ahmed@email.com"
      />
    </VCol>

    <!-- 👉 City -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.password"
        label="Password"
        placeholder="password"
        type="password"
      />
    </VCol>

    <!-- 👉 Country -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.city"
        label="city"
        placeholder="Blida"
      />
    </VCol>

    <!-- 👉 Company -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.company"
        label="Company"
        placeholder="Swellty Company"
      />
    </VCol>
    <!-- 👉 Phone Number -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="form.phoneNumber"
        label="Phone Number"
        placeholder="+213 055655525"
      />
    </VCol>
    <!-- 👉 Check User Status -->
    <VRadioGroup
      v-model="form.userStatus"
      inline
      label="User Status"
    >
      <VRadio
        label="delivery person"
        value="deliveryPerson"
      />
      <VRadio
        label="Ecommerce Sender"
        value="sender"
      />
      <VRadio
        label="Worker"
        value="worker"
      />
    </VRadioGroup>


    <VCol
      cols="12"
      class="d-flex gap-4"
    >
      <VBtn
        type="submit"
        @click="AddNewUser"
      >
        Submit
      </VBtn>

      <VBtn
        type="reset"
        color="secondary"
        variant="tonal"
      >
        Reset
      </VBtn>
    </VCol>
  </VRow>
</template>
