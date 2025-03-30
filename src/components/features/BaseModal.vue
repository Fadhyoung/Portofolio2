<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBaseModalState } from '../../stores/baseStore'
import { X } from 'lucide-vue-next'
import { MAIL_URL, WHATSAPP_URL, X_URL } from '../../constants/otherLink'

const modalStore = useBaseModalState()
const { isModalOpen } = storeToRefs(modalStore)

const goToPage = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    v-if="isModalOpen"
    class="fixed top-0 left-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click="modalStore.hideModal"
  >
    <div class="w-1/4 max-w-full border border-midBlue rounded-lg shadow-lg bg-white" @click.stop>
      <header class="flex justify-end items-center p-4 border-b">
        <BaseButton class="text-gray-500 hover:text-gray-700" @click="modalStore.hideModal"
          ><X
        /></BaseButton>
      </header>
      <section class="p-5 flex flex-col gap-5">
        <BaseButton
          :label="$t('modal.email')"
          buttonType="outline"
          size="md"
          variant="tertiary"
          radius="md"
          visibleOn="all"
          @click="goToPage(MAIL_URL)"
        />
        <BaseButton
          :label="$t('modal.whatsapp')"
          buttonType="outline"
          size="md"
          variant="tertiary"
          radius="md"
          visibleOn="all"
          @click="goToPage(WHATSAPP_URL)"
        />
        <BaseButton
          :label="$t('modal.x')"
          buttonType="outline"
          size="md"
          variant="tertiary"
          radius="md"
          visibleOn="all"
          @click="goToPage(X_URL)"
        />
      </section>
    </div>
  </div>
</template>
