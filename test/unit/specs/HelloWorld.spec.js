import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    console.log("--- T E S T ---");
    console.log(vm)
    console.log(vm.$el)
    console.log("Text content")
    console.log(vm.$el.querySelector('.hello').textContent)
    console.log("End of Text content")
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
});
