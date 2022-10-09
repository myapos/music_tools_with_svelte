import { c as create_ssr_component, e as escape, b as createEventDispatcher, f as add_attribute, v as validate_component, m as missing_component, j as each, r as spread, u as escape_object, t as escape_attribute_value, w as globals, g as subscribe, h as getContext, o as onDestroy } from "../../../chunks/index.js";
import { l as logarithmicScale, f as frequency, g as sliderPos, M as MIN_RANGE_FREQ, h as MAX_RANGE_FREQ, i as selectedTuningMode, H as H1 } from "../../../chunks/H1.js";
import { b as hashNotesFreq, B as Button, P as Popup, a as analyticPopularTunings, h as hashFreqNotes } from "../../../chunks/analyticPopularTunings.js";
import { R as RangeSlider, I as Icon, D as DEFAULT_TIMEOUT_DURATION } from "../../../chunks/values.js";
import IoArrowBackOutline from "svelte-icons-pack/io/IoArrowBackOutline.js";
import IoArrowForward from "svelte-icons-pack/io/IoArrowForward.js";
import { P, L as Link, H as H3 } from "../../../chunks/P.js";
import { H as H2 } from "../../../chunks/H2.js";
import "../../../chunks/index2.js";
import "../../../chunks/stores.js";
function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
const Item_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".item.svelte-ybdqo9{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-ybdqo9{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-ybdqo9{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-ybdqo9:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-ybdqo9{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-ybdqo9{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-ybdqo9{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-ybdqo9:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$7);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses, true) + " svelte-ybdqo9"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
const List_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".listContainer.svelte-1mmk1xt{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1mmk1xt{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1mmk1xt{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1mmk1xt{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$6);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1mmk1xt", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="${"listItem"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
        $$result,
        {
          item,
          filterText,
          getOptionLabel,
          isFirst: isItemFirst(i),
          isActive: isItemActive(item, value, optionIdentifier),
          isHover: isItemHover(hoverItemIndex, item, i, items),
          isSelectable: isItemSelectable(item)
        },
        {},
        {}
      )}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="${"listGroupTitle svelte-1mmk1xt"}">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="${"listItem"}" tabindex="${"-1"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      },
      {},
      {}
    )}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="${"empty svelte-1mmk1xt"}">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
const Selection_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".selection.svelte-1be6cx3{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$5);
  return `<div class="${"selection svelte-1be6cx3"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
const MultiSelection_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".multiSelectItem.svelte-j22aje.svelte-j22aje{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-j22aje.svelte-j22aje{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-j22aje.svelte-j22aje:hover,.multiSelectItem.active.svelte-j22aje.svelte-j22aje{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-j22aje.svelte-j22aje:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje:hover,.active.svelte-j22aje .multiSelectItem_clear.svelte-j22aje{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-j22aje:hover svg.svelte-j22aje,.active.svelte-j22aje .multiSelectItem_clear svg.svelte-j22aje{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-j22aje svg.svelte-j22aje{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$4);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "", true) + " " + escape(isDisabled ? "disabled" : "", true) + " svelte-j22aje"}"><div class="${"multiSelectItem_label svelte-j22aje"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="${"multiSelectItem_clear svelte-j22aje"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}" class="${"svelte-j22aje"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
const VirtualList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svelte-virtual-list-viewport.svelte-yyenik{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-yyenik,svelte-virtual-list-row.svelte-yyenik{display:block}svelte-virtual-list-row.svelte-yyenik{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$3);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height, true) + ";"}" class="${"svelte-yyenik"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}" class="${"svelte-yyenik"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-yyenik"}">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
const Select_svelte_svelte_type_style_lang = "";
const { Object: Object_1 } = globals;
const css$2 = {
  code: ".selectContainer.svelte-1c314rr.svelte-1c314rr{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr:focus{outline:none}.selectContainer.svelte-1c314rr.svelte-1c314rr:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-1c314rr.svelte-1c314rr{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-1c314rr.svelte-1c314rr{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-1c314rr.svelte-1c314rr{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-1c314rr.svelte-1c314rr:focus{outline:none}.clearSelect.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-1c314rr.svelte-1c314rr:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-1c314rr .clearSelect.svelte-1c314rr{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-1c314rr svg.svelte-1c314rr{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);-webkit-animation:svelte-1c314rr-rotate 0.75s linear infinite;animation:svelte-1c314rr-rotate 0.75s linear infinite}.spinner_icon.svelte-1c314rr.svelte-1c314rr{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-1c314rr.svelte-1c314rr{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-1c314rr.svelte-1c314rr{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-1c314rr>.svelte-1c314rr{flex:1 1 50px}.selectContainer.multiSelect.svelte-1c314rr input.svelte-1c314rr{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-1c314rr.svelte-1c314rr{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-1c314rr.svelte-1c314rr{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@-webkit-keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon: Icon2 = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(
    async () => {
      isWaiting = true;
      let res = await loadOptions(filterText).catch((err) => {
        console.warn("svelte-select loadOptions error :>> ", err);
        dispatch("error", { type: "loadOptions", details: err });
      });
      if (res && !res.cancelled) {
        if (res) {
          if (res && res.length > 0 && typeof res[0] !== "object") {
            res = convertStringItemsToObjects(res);
          }
          filteredItems = [...res];
          dispatch("loaded", { items: filteredItems });
        } else {
          filteredItems = [];
        }
        if (isCreatable) {
          filteredItems = addCreatableItem(filteredItems, filterText);
        }
        isWaiting = false;
        isFocused = true;
        listOpen = true;
      }
    },
    loadOptionsInterval
  );
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon2 !== void 0)
    $$bindings.Icon(Icon2);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses, true) + " svelte-1c314rr",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="${"polite"}" aria-atomic="${"false"}" aria-relevant="${"additions text"}" class="${"a11yText svelte-1c314rr"}">${isFocused ? `<span id="${"aria-selection"}">${escape(ariaSelection)}</span>
            <span id="${"aria-context"}">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon2 ? `${validate_component(Icon2 || missing_component, "svelte:component").$$render($$result, Object_1.assign(iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        value,
        getSelectionLabel,
        activeValue,
        isDisabled,
        multiFullItemClearable
      },
      {},
      {}
    )}` : ``}

    <input${spread(
      [
        { readonly: !isSearchable || null },
        escape_object(_inputAttributes),
        {
          placeholder: escape_attribute_value(placeholderText)
        },
        {
          style: escape_attribute_value(inputStyles)
        },
        { disabled: isDisabled || null }
      ],
      { classes: "svelte-1c314rr" }
    )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="${"selectedItem svelte-1c314rr"}">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="${"clearSelect svelte-1c314rr"}" aria-hidden="${"true"}">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="${"indicator svelte-1c314rr"}" aria-hidden="${"true"}">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 20"}" focusable="${"false"}" aria-hidden="${"true"}" class="${"svelte-1c314rr"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="${"spinner svelte-1c314rr"}"><svg class="${"spinner_icon svelte-1c314rr"}" viewBox="${"25 25 50 50"}"><circle class="${"spinner_path svelte-1c314rr"}" cx="${"50"}" cy="${"50"}" r="${"20"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"5"}" stroke-miterlimit="${"10"}"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(listProps, { hoverItemIndex }),
      {
        hoverItemIndex: ($$value) => {
          hoverItemIndex = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="${"svelte-1c314rr"}">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="${"svelte-1c314rr"}">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const SearchNotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_logarithmicScale;
  $$unsubscribe_logarithmicScale = subscribe(logarithmicScale, (value) => value);
  let { timeoutId } = $$props;
  let { handleTimeout } = $$props;
  let { oscillatorRef = {} } = $$props;
  const itemsHashNotes = Object.keys(hashNotesFreq).map((note) => {
    return { value: hashNotesFreq[note], label: note };
  });
  let selectedFreq = { value: "440", label: "A4" };
  if ($$props.timeoutId === void 0 && $$bindings.timeoutId && timeoutId !== void 0)
    $$bindings.timeoutId(timeoutId);
  if ($$props.handleTimeout === void 0 && $$bindings.handleTimeout && handleTimeout !== void 0)
    $$bindings.handleTimeout(handleTimeout);
  if ($$props.oscillatorRef === void 0 && $$bindings.oscillatorRef && oscillatorRef !== void 0)
    $$bindings.oscillatorRef(oscillatorRef);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Select, "Select").$$render(
      $$result,
      {
        containerClasses: "w-3/5 lg:w-full p-5 rounded z-10",
        items: itemsHashNotes,
        placeholder: "Select note",
        value: selectedFreq
      },
      {
        value: ($$value) => {
          selectedFreq = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_logarithmicScale();
  return $$rendered;
});
const WaveType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedType } = $$props;
  let { oscillatorRef } = $$props;
  let { timeoutId } = $$props;
  let { handleTimeout } = $$props;
  let items = [
    { value: "sine", label: "Sine" },
    { value: "square", label: "Square" },
    { value: "sawtooth", label: "Sawtooth" },
    { value: "triangle", label: "Triangle" }
  ];
  if ($$props.selectedType === void 0 && $$bindings.selectedType && selectedType !== void 0)
    $$bindings.selectedType(selectedType);
  if ($$props.oscillatorRef === void 0 && $$bindings.oscillatorRef && oscillatorRef !== void 0)
    $$bindings.oscillatorRef(oscillatorRef);
  if ($$props.timeoutId === void 0 && $$bindings.timeoutId && timeoutId !== void 0)
    $$bindings.timeoutId(timeoutId);
  if ($$props.handleTimeout === void 0 && $$bindings.handleTimeout && handleTimeout !== void 0)
    $$bindings.handleTimeout(handleTimeout);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Select, "Select").$$render(
      $$result,
      {
        containerClasses: "w-3/5 md:w-4/5 p-5 rounded z-10",
        items,
        placeholder: "Select type",
        value: selectedType
      },
      {
        value: ($$value) => {
          selectedType = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const MIN_VOLUME = 0;
const MAX_VOLUME = 1;
const Volume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rangeVolume;
  let { gain = {} } = $$props;
  let { volumePosition } = $$props;
  let { timeoutId } = $$props;
  let { handleTimeout } = $$props;
  if ($$props.gain === void 0 && $$bindings.gain && gain !== void 0)
    $$bindings.gain(gain);
  if ($$props.volumePosition === void 0 && $$bindings.volumePosition && volumePosition !== void 0)
    $$bindings.volumePosition(volumePosition);
  if ($$props.timeoutId === void 0 && $$bindings.timeoutId && timeoutId !== void 0)
    $$bindings.timeoutId(timeoutId);
  if ($$props.handleTimeout === void 0 && $$bindings.handleTimeout && handleTimeout !== void 0)
    $$bindings.handleTimeout(handleTimeout);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    rangeVolume = [volumePosition];
    $$rendered = `${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        float: false,
        range: true,
        hoverable: true,
        step: 1e-4,
        min: MIN_VOLUME,
        max: MAX_VOLUME,
        values: rangeVolume
      },
      {
        values: ($$value) => {
          rangeVolume = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const StepControls_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input.svelte-r5cvbc::-webkit-outer-spin-button,input.svelte-r5cvbc::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-r5cvbc{-moz-appearance:textfield}",
  map: null
};
const StepControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frequency, $$unsubscribe_frequency;
  let $$unsubscribe_logarithmicScale;
  $$unsubscribe_frequency = subscribe(frequency, (value) => $frequency = value);
  $$unsubscribe_logarithmicScale = subscribe(logarithmicScale, (value) => value);
  let { oscillatorRef = {} } = $$props;
  let { timeoutId } = $$props;
  let { handleTimeout } = $$props;
  if ($$props.oscillatorRef === void 0 && $$bindings.oscillatorRef && oscillatorRef !== void 0)
    $$bindings.oscillatorRef(oscillatorRef);
  if ($$props.timeoutId === void 0 && $$bindings.timeoutId && timeoutId !== void 0)
    $$bindings.timeoutId(timeoutId);
  if ($$props.handleTimeout === void 0 && $$bindings.handleTimeout && handleTimeout !== void 0)
    $$bindings.handleTimeout(handleTimeout);
  $$result.css.add(css$1);
  $$unsubscribe_frequency();
  $$unsubscribe_logarithmicScale();
  return `<div class="${"flex w-2/5 flex-row items-center justify-center"}"><div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: IoArrowBackOutline,
      size: "2rem",
      color: "var(--tuner-color)",
      title: "decrease frequency",
      className: "cursor-pointer hover:brightness-150"
    },
    {},
    {}
  )}</div>

	<div class="${"mx-auto w-3/5 cursor-pointer rounded text-center text-xl text-tuner-color md:w-4/5"}">${`${escape($frequency)} Hz`}</div>

	<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: IoArrowForward,
      size: "2rem",
      color: "var(--tuner-color)",
      title: "increase frequency",
      className: "cursor-pointer hover:brightness-150"
    },
    {},
    {}
  )}</div>
</div>`;
});
const GenerateByFrequency = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPlaying;
  let rangeValues;
  let $sliderPos, $$unsubscribe_sliderPos;
  let $$unsubscribe_logarithmicScale;
  let $frequency, $$unsubscribe_frequency;
  $$unsubscribe_sliderPos = subscribe(sliderPos, (value) => $sliderPos = value);
  $$unsubscribe_logarithmicScale = subscribe(logarithmicScale, (value) => value);
  $$unsubscribe_frequency = subscribe(frequency, (value) => $frequency = value);
  const { open } = getContext("simple-modal");
  const showPopup = ({ message }) => {
    return open(Popup, { message });
  };
  let frequencyValue;
  let oscillatorRef;
  const unsubscribe = frequency.subscribe((value) => {
    frequencyValue = value;
  });
  //! globals for contenxt
  let gain;
  let audioContext;
  let timeoutId;
  //! initial volume setting
  let volumePosition = 0.1;
  //! initial value of select
  let selectedType = { value: "sine", label: "Sine" };
  const stop = ({ g, context }) => {
    isPlaying = false;
    g.gain.exponentialRampToValueAtTime(1e-5, context.currentTime + 0.04);
    if (audioContext.state === "running") {
      audioContext.close();
    }
    clearTimeout(timeoutId);
  };
  const handleTimeout = () => {
    if (isPlaying) {
      //! stop
      stop({ g: gain, context: audioContext });
      showPopup({
        message: `Period of ${DEFAULT_TIMEOUT_DURATION / 1e3} secs exceeded after last action`
      });
    }
  };
  const handleGenerator = (frequency2 = 300) => {
    if (isPlaying) {
      //! stop
      stop({ g: gain, context: audioContext });
    } else {
      const context = new AudioContext();
      audioContext = context;
      const oscillator = context.createOscillator();
      const g = context.createGain();
      gain = g;
      gain.gain.value = volumePosition;
      oscillator.connect(g);
      g.connect(context.destination);
      oscillator.type = selectedType.value;
      oscillator.frequency.value = frequencyValue;
      oscillatorRef = oscillator;
      oscillator.start(0);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
      isPlaying = true;
    }
  };
  onDestroy(() => {
    if (isPlaying) {
      stop({ g: gain, context: audioContext });
    }
    unsubscribe();
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isPlaying = false;
    rangeValues = [$sliderPos];
    $$rendered = `<div><div class="${"mx-auto w-2/5 rounded p-2 text-center text-xl text-tuner-color"}">Frequency selector
	</div>
	${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        min: MIN_RANGE_FREQ,
        max: MAX_RANGE_FREQ,
        hoverable: true,
        springValues: { stiffness: 0.1, damping: 0.9 },
        values: rangeValues
      },
      {
        values: ($$value) => {
          rangeValues = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div class="${"grid grid-cols-4 grid-rows-2 items-end justify-center gap-y-0 text-tuner-color"}"><div class="${"text-center"}">Volume ${escape(parseInt((100 * volumePosition).toFixed()))} %</div>
		<div class="${"text-center"}">Search Notes</div>
		<div class="${"text-center"}">Step Controls</div>
		<div class="${"text-center"}">Wave Shape</div>
		
		<div class="${"mb-o flex flex-col content-end"}">${validate_component(Volume, "Volume").$$render(
      $$result,
      {
        handleTimeout,
        gain,
        volumePosition,
        timeoutId
      },
      {
        gain: ($$value) => {
          gain = $$value;
          $$settled = false;
        },
        volumePosition: ($$value) => {
          volumePosition = $$value;
          $$settled = false;
        },
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="${"flex justify-center"}">${validate_component(SearchNotes, "SearchNotes").$$render(
      $$result,
      { oscillatorRef, handleTimeout, timeoutId },
      {
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="${"flex justify-center"}">${validate_component(StepControls, "StepControls").$$render(
      $$result,
      { handleTimeout, oscillatorRef, timeoutId },
      {
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="${"flex justify-center"}">${validate_component(WaveType, "WaveType").$$render(
      $$result,
      {
        handleTimeout,
        selectedType,
        oscillatorRef,
        volumePosition,
        timeoutId
      },
      {
        selectedType: ($$value) => {
          selectedType = $$value;
          $$settled = false;
        },
        oscillatorRef: ($$value) => {
          oscillatorRef = $$value;
          $$settled = false;
        },
        volumePosition: ($$value) => {
          volumePosition = $$value;
          $$settled = false;
        },
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
	<div class="${"justify-centers mx-auto flex w-1/2 flex-col items-center"}">${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => handleGenerator($frequency),
        className: "text-xl text-center text-tuner-color cursor-pointer w-2/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5"
      },
      {},
      {
        default: () => {
          return `${escape(isPlaying ? "Stop" : "Play")}!
		`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_sliderPos();
  $$unsubscribe_logarithmicScale();
  $$unsubscribe_frequency();
  return $$rendered;
});
const toneClasses = "m-2 cursor-pointer";
const GenerateByPopularInstrument = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let instrumentTones;
  let hasSelectedInstrument;
  let isPlaying;
  let hasSelectedTone;
  let $frequency, $$unsubscribe_frequency;
  $$unsubscribe_frequency = subscribe(frequency, (value) => $frequency = value);
  //! globals for contenxt
  let gain;
  let audioContext;
  let timeoutId;
  let oscillatorRef;
  //! initial volume setting
  let volumePosition = 0.1;
  //! initial value of select
  let selectedType = { value: "sine", label: "Sine" };
  const { open } = getContext("simple-modal");
  //! convert popular tunings for usage with select
  const tuningKeys = Object.keys(analyticPopularTunings);
  const valuesForSelect = tuningKeys.map((key) => ({
    label: key,
    value: analyticPopularTunings[key]
  }));
  const tones = [];
  onDestroy(() => {
    if (isPlaying) {
      stop({ g: gain, context: audioContext });
    }
  });
  const stop = ({ g, context }) => {
    isPlaying = false;
    g.gain.exponentialRampToValueAtTime(1e-5, context.currentTime + 0.04);
    if (audioContext.state === "running") {
      audioContext.close();
    }
    clearTimeout(timeoutId);
  };
  const showPopup = ({ message }) => {
    return open(Popup, { message });
  };
  const handleTimeout = () => {
    if (isPlaying) {
      //! stop
      stop({ g: gain, context: audioContext });
      showPopup({
        message: `Period of ${DEFAULT_TIMEOUT_DURATION / 1e3} secs exceeded after last action`
      });
    }
  };
  const handleGenerator = (frequency2 = 300) => {
    if (isPlaying) {
      //! stop
      stop({ g: gain, context: audioContext });
    } else {
      const context = new AudioContext();
      audioContext = context;
      const oscillator = context.createOscillator();
      const g = context.createGain();
      gain = g;
      gain.gain.value = volumePosition;
      oscillator.connect(g);
      g.connect(context.destination);
      oscillator.type = selectedType.value;
      oscillator.frequency.value = frequency2;
      oscillatorRef = oscillator;
      oscillator.start(0);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT_DURATION);
      isPlaying = true;
    }
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    instrumentTones = tones;
    hasSelectedInstrument = instrumentTones.length > 0;
    isPlaying = false;
    hasSelectedTone = typeof hashFreqNotes[$frequency] !== "undefined";
    $$rendered = `<div class="${"flex flex-col items-center justify-center rounded p-2 text-center text-xl text-tuner-color"}"><div>Step 1</div>
	<div class="${"mt-2 text-sm"}">Please select instrument</div>
	<div class="${"mt-5 w-1/5 p-5 lg:w-2/5"}">${validate_component(Select, "Select").$$render(
      $$result,
      {
        containerClasses: "p-5 mt-5 rounded z-10",
        items: valuesForSelect,
        placeholder: "Select instrument"
      },
      {},
      {}
    )}</div>

	${hasSelectedInstrument ? `<div class="${"flex flex-row"}">${each(instrumentTones, (tone) => {
      return `<div${add_attribute(
        "class",
        hashFreqNotes[$frequency] === tone.toString().trim() ? `${toneClasses} text-red-200` : toneClasses,
        0
      )}>${escape(tone)}</div>`;
    })}</div>
		<div>Step 2</div>
		${hasSelectedTone ? `<div class="${"mt-2 text-base"}">Selected frequency ${escape($frequency)} Hz</div>

			<div class="${"justify-centers mx-auto flex w-1/2 flex-row items-center justify-center lg:w-full"}"><div class="${"w-2/5 lg:w-3/5"}">${validate_component(Volume, "Volume").$$render(
      $$result,
      {
        handleTimeout,
        gain,
        volumePosition,
        timeoutId
      },
      {
        gain: ($$value) => {
          gain = $$value;
          $$settled = false;
        },
        volumePosition: ($$value) => {
          volumePosition = $$value;
          $$settled = false;
        },
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}
					<div class="${"text-center text-sm"}">Volume ${escape(parseInt((100 * volumePosition).toFixed()))} %</div></div>
				${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => handleGenerator($frequency),
        className: "text-xl text-center text-tuner-color cursor-pointer w-2/5 lg:w-3/5 p-2 bg-black hover:bg-red-900 hover:text-black rounded mx-auto"
      },
      {},
      {
        default: () => {
          return `${escape(isPlaying ? "Stop" : "Play")}!
				`;
        }
      }
    )}
				<div class="${"ml-5 w-2/5 lg:w-3/5"}">${validate_component(WaveType, "WaveType").$$render(
      $$result,
      {
        handleTimeout,
        selectedType,
        oscillatorRef,
        volumePosition,
        timeoutId
      },
      {
        selectedType: ($$value) => {
          selectedType = $$value;
          $$settled = false;
        },
        oscillatorRef: ($$value) => {
          oscillatorRef = $$value;
          $$settled = false;
        },
        volumePosition: ($$value) => {
          volumePosition = $$value;
          $$settled = false;
        },
        timeoutId: ($$value) => {
          timeoutId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : `<div class="${"mt-2 text-sm"}">Please select tone</div>`}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_frequency();
  return $$rendered;
});
const h2ExtraClasses = "py-2";
const Instructions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"w-3/4 py-8 text-justify md:w-full md:py-8 md:px-4 md:text-2xl md:tracking-wide"}">${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `What is an tone generator?`;
    }
  })}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `A ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://en.wikipedia.org/wiki/Signal_generator",
          description: "signal",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} or tone generator is one of a class of electronic
		devices that generates electrical signals with set properties of amplitude, frequency, and wave shape.
		These generated signals are used as a stimulus for electronic measurements, typically used in designing,
		testing, troubleshooting, and repairing electronic or electroacoustic devices, though it often has
		artistic uses as well.

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `There are many different types of signal generators with different purposes and applications
			and at varying levels of expense. These types include function generators, RF and microwave
			signal generators, pitch generators, arbitrary waveform generators, digital pattern
			generators, and frequency generators. In general, no device is suitable for all possible
			applications. A signal generator may be as simple as an oscillator with calibrated frequency
			and amplitude. More general-purpose signal generators allow control of all the characteristics
			of a signal. Modern general-purpose signal generators will have a microprocessor control and
			may also permit control from a personal computer. Signal generators may be free-standing
			self-contained instruments, or may be incorporated into more complex automatic test systems.
		`;
        }
      })}`;
    }
  })}
	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `How to use this tone generator?`;
    }
  })}

	${validate_component(P, "P").$$render(
    $$result,
    {
      className: "p-5 border-2 border-red-900 rounded text-lg text-red-900"
    },
    {},
    {
      default: () => {
        return `Be aware that the generation of high frequencies/volume may damage your hearing.`;
      }
    }
  )}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `General Use`;
        }
      })}
		You can use this tone generator by selecting a frequency and clicking Play. The tone will be played
		for a few seconds and stop by default. The frequency selection can be achieved using the following
		controls
		<ul class="${"list-inside list-disc marker:text-red-900"}"><li>Frequency selector</li>
			<li>Step Controls</li>
			<li>Notes Controls</li></ul>

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Below is a more detailed explanation of each option.`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Frequency Selector`;
        }
      })}

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can use this tone generator by using the frequency selector and clicking <span class="${"text-red-900"}">Play</span>. The range of the frequency selector is between
			<span class="${"text-red-900"}">${escape(MIN_RANGE_FREQ)}-${escape(MAX_RANGE_FREQ)} Hz</span>. The slider uses a
			logarithmic slider focusing on the most used frequencies for tuning an instrument which is
			between <span class="${"text-red-900"}">1000 Hz</span>. For larger frequencies you can control
			smaller frequencies increasements by using the step controls buttons.
		`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Volume Selector`;
        }
      })}

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can change the volume of the playing tone between <span class="${"text-red-900"}">0-100%</span>. Be aware though that the generation in high volumes may damage your hearing.
		`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Notes Selector`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can search for the frequency of a specific tone in a octave by using the notes selector
			dropdown.
		`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Step Controls`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can fine tune the desired frequency by using the arrows left/right for step by step
			increasements/decreasements of a specific tone. Each step has a value of 1Hz.
		`;
        }
      })}
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Wave Shape`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `In electronics, acoustics, and related fields, the ${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://en.wikipedia.org/wiki/Waveform",
              description: "waveform",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}
			of a signal is the shape of its graph as a function of time, independent of its time and magnitude
			scales and of any displacement in time.
		`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `In this tone generator the wave shapes that are supported are <span class="${"font-semibold text-red-900"}">Sine, Square, Sawtooth and Triangle</span>. You can select and use them before playing from the wave shape selector.
		`;
        }
      })}`;
    }
  })}

	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `Granting Microphone Access`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome or Firefox browsers

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://support.google.com/chrome/answer/2693767?hl=en-GB&co=GENIE.Platform%3DDesktop",
              description: "Chrome",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Go to Settings -&gt; Site Settings -&gt; Microphone and allow this site to access the microphone.
		`;
        }
      })}
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions#w_use-prompts-to-allow-or-block-camera-and-microphone-permissions-for-a-site",
              description: "Firefox",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Go to Preferences -&gt; click Privacy &amp; Security -&gt; Scroll down to permissions and select
			Settings. Search this site and select Allow.
		`;
        }
      })}`;
    }
  })}</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tools.svelte-oj6189{background-color:var(--background-black-red);min-height:300px}",
  map: null
};
const h1ExtraClasses = "p-8";
const selectBtnClasses = "text-xl text-center text-tuner-color cursor-pointer w-1/5 lg:w-2/5 p-2 bg-black	hover:bg-red-900 hover:text-black rounded mx-auto mt-5";
const isSelectedClass = "bg-red-50";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isInPopularInstrumentsGeneratorMode;
  let isInFrequencyGeneratorGeneratorMode;
  let shouldDisplayInitialMessage;
  let $selectedTuningMode, $$unsubscribe_selectedTuningMode;
  $$unsubscribe_selectedTuningMode = subscribe(selectedTuningMode, (value) => $selectedTuningMode = value);
  const handleSelectionMode = (mode) => {
    selectedTuningMode.update((prev) => {
      return mode;
    });
  };
  $$result.css.add(css);
  isInPopularInstrumentsGeneratorMode = $selectedTuningMode === "TuneByPopularInstruments";
  isInFrequencyGeneratorGeneratorMode = $selectedTuningMode === "TuneByFrequencySelection";
  shouldDisplayInitialMessage = $selectedTuningMode === "";
  $$unsubscribe_selectedTuningMode();
  return `${validate_component(H1, "H1").$$render($$result, { className: h1ExtraClasses }, {}, {
    default: () => {
      return `Tone Generator`;
    }
  })}
<section class="${"tools relative flex w-full flex-col justify-center bg-red-900 p-8 md:text-justify md:text-xl md:tracking-wide svelte-oj6189"}">${shouldDisplayInitialMessage ? `<div class="${"mx-auto w-2/5 rounded p-2 text-center text-xl text-tuner-color"}">Please select generation mode
		</div>` : ``}
	<div class="${"flex"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => handleSelectionMode("TuneByPopularInstruments"),
      className: `${selectBtnClasses} ${isInPopularInstrumentsGeneratorMode ? isSelectedClass : ""}`
    },
    {},
    {
      default: () => {
        return `Generate Tones Of Popular Instruments`;
      }
    }
  )}
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => handleSelectionMode("TuneByFrequencySelection"),
      className: `${selectBtnClasses} ${isInFrequencyGeneratorGeneratorMode ? isSelectedClass : ""}`
    },
    {},
    {
      default: () => {
        return `Generate Tones By Frequency Selection`;
      }
    }
  )}</div>
	${isInPopularInstrumentsGeneratorMode ? `${validate_component(GenerateByPopularInstrument, "GenerateByPopularInstrument").$$render($$result, {}, {}, {})}` : ``}

	${isInFrequencyGeneratorGeneratorMode ? `${validate_component(GenerateByFrequency, "GenerateByFrequency").$$render($$result, {}, {}, {})}` : ``}</section>
${validate_component(Instructions, "Instructions").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
