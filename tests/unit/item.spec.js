import { shallowMount } from "@vue/test-utils";
import Item from "@/components/Item";

describe("Item.vue", () => {
  test("render item.title", () => {
    const item = {
      title: "Some title"
    };
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    expect(wrapper.text()).toContain(item.title);
  });
  test("render item.author", () => {
    const item = {
      by: "John Doe"
    };
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    });
    expect(wrapper.text()).toContain(item.by);
  });
  test("renders a link to the item.url with item.title as text", () => {
    const item = {
      url: "http://some-url.com",
      title: "some title"
    };
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    });
    const a = wrapper.find("a");
    expect(a.text()).toBe(item.title);
    expect(a.attributes().href).toBe(item.url);
  });
  test("render item.score as number", () => {
    const item = {
      score: 100
    };
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    });
    expect(wrapper.text()).toContain(item.score);
  });
});
