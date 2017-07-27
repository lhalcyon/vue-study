<template>
  <div id="app">
    <router-link to="/1">Demo1</router-link>
    <router-link to="/2">Demo2</router-link>
    <router-link to="/3">Demo3</router-link>
    <router-link to="/4">Demo4</router-link>
    <router-link to="/5">Demo5</router-link>
    <router-link to="/6">Demo6</router-link>
    <router-link to="/7">Demo7</router-link>
    <router-link to="/8">Demo8</router-link>
    <router-link to="/9">AutoPackageEmail</router-link>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
