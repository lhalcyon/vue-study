<template>
  <div id="app">
    <router-link to="/1">Demo1</router-link>
    <router-link to="/2">Demo2</router-link>
    <router-link to="/3">Demo3</router-link>
    <router-link to="/4">Demo4</router-link>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
