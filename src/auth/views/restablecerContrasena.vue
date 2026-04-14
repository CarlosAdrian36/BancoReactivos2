<script setup lang="ts">
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const resetearSchema = z
  .object({
    contrasena: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
      .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
      .regex(/[0-9]/, "La contraseña debe contener al menos un número")
      .regex(/[@$!%*?&]/, "La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)"),
    confirmacion: z.string()
  })
  .refine((data) => data.contrasena === data.confirmacion, {
    message: "Las contraseñas no coinciden"
  });

type ReseteoForm = z.infer<typeof resetearSchema>;

const { handleSubmit, errors, meta, values, defineField } = useForm<ReseteoForm>({
  validationSchema: toTypedSchema(resetearSchema),
  initialValues: {
    contrasena: "",
    confirmacion: ""
  }
});
const onSubmit = handleSubmit((values) => {
  console.log("Formulario válido:", values);
});

const [contrasena, contrasenaAttrs] = defineField("contrasena");
const [confirmacion, confirmacionAttrs] = defineField("confirmacion");
</script>

<template>
  <div class="w-full max-w-md sm:max-w-lg lg:max-w-xl">
    <div
      class="bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300"
    >
      <!-- HEADER -->
      <div class="flex flex-col items-center gap-6 mb-10">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div class="h-12 px-3 flex items-center justify-center rounded-lg">
            <!-- <span class="text-base-content font-bold text-xl tracking-tighter"> UANL </span> -->
            <img src="/src/assets/image/Logo_de_la_UANL.svg.webp" alt="UANL Logo" class="h-20 w-auto" />
          </div>

          <div class="h-8 w-px bg-white/30 dark:bg-white/20"></div>

          <div class="flex items-center gap-2">
            <!-- <span class="text-base-content font-semibold text-2xl tracking-tight"> Nexus </span> -->
            <img src="/src/assets/image/nx-logo.png" alt="Nexus Logo" class="h-10 w-auto" />
          </div>
        </div>

        <div class="text-center">
          <h1 class="text-2xl font-bold text-base-content/70">Banco de Reactivos</h1>
          <p class="text-sm text-base-content/50">Gestor de bancos para reactivos</p>
        </div>
      </div>

      <!-- FORM -->
      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- Usuario -->
        <div>
          <label class="block text-sm font-medium text-base-content/70 mb-2"> Nueva Contraseña </label>

          <div class="relative group">
            <i
              class="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
            ></i>

            <input
              v-model="contrasena"
              v-bind="contrasenaAttrs"
              type="text"
              :class="[
                'w-full pl-10 pr-4 py-3 bg-base-200/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-base-content placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none',
                {
                  'border border-red-500 focus:ring-red-500 focus:border-red-500': errors.contrasena
                }
              ]"
            />
            <span class="text-red-500 text-sm absolute left-0 -bottom-5">
              {{ errors.contrasena }}
            </span>
          </div>
          <div class="mt-3 space-y-1 text-sm">
            <div
              class="flex items-center gap-2"
              :class="values.contrasena?.length >= 8 ? 'text-success' : 'text-gray-700'"
            >
              <i class="fa-solid fa-check text-xs"></i>
              <span>Mínimo 8 caracteres</span>
            </div>

            <div
              class="flex items-center gap-2"
              :class="/[A-Z]/.test(values.contrasena) ? 'text-green-500' : 'text-gray-400'"
            >
              <i class="fa-solid fa-check text-xs"></i>
              <span>Al menos una letra mayúscula</span>
            </div>

            <div
              class="flex items-center gap-2"
              :class="/[a-z]/.test(values.contrasena) ? 'text-green-500' : 'text-gray-400'"
            >
              <i class="fa-solid fa-check text-xs"></i>
              <span>Al menos una letra minúscula</span>
            </div>

            <div
              class="flex items-center gap-2"
              :class="/[0-9]/.test(values.contrasena) ? 'text-green-500' : 'text-gray-400'"
            >
              <i class="fa-solid fa-check text-xs"></i>
              <span>Al menos un número</span>
            </div>

            <div
              class="flex items-center gap-2"
              :class="/[@$!%*?&]/.test(values.contrasena) ? 'text-green-500' : 'text-gray-400'"
            >
              <i class="fa-solid fa-check text-xs"></i>
              <span>Un carácter especial (@, $, !, %, *, ?, &)</span>
            </div>
          </div>
        </div>
        <!-- Correo -->
        <div>
          <label class="block text-sm font-medium text-base-content/30 mb-2"> Confirmar Contraseña </label>

          <div class="relative group">
            <i
              class="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
            ></i>

            <input
              v-model="confirmacion"
              v-bind="confirmacionAttrs"
              type="password"
              :class="[
                'w-full pl-10 pr-4 py-3 bg-base-200/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-base-content placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none',
                {
                  'border border-red-500 focus:ring-red-500 focus:border-red-500': errors.confirmacion
                }
              ]"
            />
            <span class="text-red-500 text-sm absolute left-0 -bottom-5">
              {{ errors.confirmacion }}
            </span>
          </div>
        </div>

        <!-- Button -->
        <button
          :disabled="!meta.valid"
          type="submit"
          class="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
        >
          Reestablecer Contraseña
        </button>
      </form>

      <!-- Footer -->
      <!-- <div class="mt-6 sm:mt-8 text-center border-t border-gray-200 dark:border-white/10 pt-4 sm:pt-6"></div> -->
    </div>

    <!-- <div class="mt-8 text-center text-white/60 text-xs">
      <p>© 2024 Universidad Autónoma de Nuevo León</p>
      <div class="flex justify-center gap-4 mt-2">
        <a class="hover:text-white" href="#">Aviso de Privacidad</a>
        <span class="text-white/20">•</span>
        <a class="hover:text-white" href="#">v.0.0.1</a>
      </div>
    </div> -->
  </div>
</template>
<style scoped>
.glass-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
