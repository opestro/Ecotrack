<script>
import { signInWithEmailAndPassword } from 'firebase/auth'

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
    async login(){
      try {
        await signInWithEmailAndPassword(       
          nuxtApp.$auth, 
          this.form.email, 
          this.form.password ).then(data=>{console.log( data )})
      } catch (error) { alert(error)}
    },
  },
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->

      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex" />
          </template>

          <VCardTitle class="font-weight-bold text-capitalize text-h3 py-1" />
        </VCardItem>

        <VCardText class="pt-1">
          <h1>dd {{ test }}</h1>
          <h4 class="text-h4 mb-1">
            Welcome to <span class="text-capitalize" />! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap mt-2 mb-4">
                  <VCheckbox
                    v-model="form.remember"
                    label="Remember me"
                  />
                </div>
                <!-- login button -->
                <VBtn
                  block
                  @click="login"
                >
                  Login
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
