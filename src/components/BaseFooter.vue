<script setup lang="ts">
import { Twitter, Github, Linkedin, Youtube } from 'lucide-vue-next'
import { useBaseModalState } from '../stores/baseStore'

const baseModal = useBaseModalState()
</script>

<template>
  <footer className="bg-darkBlue">
    <div className="w-10/12 m-auto px-10 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <BaseTypography
          variant="3xl"
          weight="900"
          className="text-transparent bg-gradient-to-r from-midBlue to-red-500 bg-clip-text"
        >
          {{ $t('footer.title') }}
        </BaseTypography>

        <BaseTypography variant="md" color="secondary">
          {{ $t('footer.description') }}
        </BaseTypography>

        <BaseButton
          label="Contact Me"
          variant="tertiary"
          button-type="outline"
          radius="full"
          size="lg"
          @click="baseModal.showModal"
        />
      </div>

      <div className="mt-16 border-t border-white pt-8 sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap justify-center gap-4 lg:justify-end">
          <li>
            <BaseTypography variant="xs" color="secondary">
              {{ $t('footer.copyright') }}
            </BaseTypography>
          </li>
        </ul>

        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <li>
            <Linkedin class="text-white" />
          </li>

          <li>
            <Twitter class="text-white" />
          </li>

          <li>
            <Github class="text-white" />
          </li>

          <li>
            <Youtube class="text-white" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
