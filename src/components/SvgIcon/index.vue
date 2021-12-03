<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-bind="$attrs"
  />
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { isExternal as isExternalFunc } from "@/utils/validate";
import { computed, reactive } from "@vue/reactivity";
export default {
    name: "SvgIcon",
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ""
        }
    },

    setup(props) {
        const isExternal = computed(() => isExternalFunc(props.iconClass));

        const iconName = computed(() => `#icon-${props.iconClass}`);

        const svgClass = computed(() => (props.className ? "svg-icon " + props.className : "svg-icon"));

        const styleExternalIcon = computed(() => {
            return {
                mask: `url(${props.iconClass}) no-repeat 50% 50%`,
                "-webkit-mask": `url(${props.iconClass}) no-repeat 50% 50%`
            };
        });

        return {
            isExternal,
            iconName,
            svgClass,
            styleExternalIcon
        };
    }
};
</script>

<style  scoped>
.svg-icon {
    width: 18px;
    height: 18px;
    vertical-align: -0.35em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>