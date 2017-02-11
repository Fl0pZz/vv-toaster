<template src="./toastmanager.html" />

<script src="./toastmanager.js"></script>

<style lang="css">
  .notices-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-start;
    position: fixed;
    z-index: 10000;
    top: 5%;
    right: 5%;
  }

  .notice {
    width: 300px;
    height: 100px;
    border: 1px solid black;
  }
</style>
