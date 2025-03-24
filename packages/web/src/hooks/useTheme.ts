import { useAppStore } from '@/store';
import { computed, onMounted, watch } from 'vue';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool.js';
import useThemes from './themes';

export const useTheme = (themeTool: typeof TinyThemeTool) => {
  const { themelist, $patch } = useAppStore();
  const themeName = computed(() =>
    themelist.length
      ? `${themelist[0].toUpperCase()}${themelist.slice(1).toLowerCase()}Theme`
      : 'DefaultTheme',
  );
  const { isDark } = useThemes();

  onMounted(() => {
    watch(
      isDark,
      () => {
        if (isDark.value) {
          document.body.style.filter = 'invert(0.9) hue-rotate(180deg)';
        } else {
          document.body.style.filter = '';
        }
      },
      { immediate: true },
    );
  });
  const toggleTheme = (name: string) => {
    $patch({
      themelist: name,
    });
  };
  return { toggleTheme };
};
