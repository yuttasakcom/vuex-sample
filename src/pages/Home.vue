<template>
  <div>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <router-link to="/users" tag="li">
          <a>Users</a>
        </router-link>
      </ul>
    </nav>
    <div>
      <CounterView />
      <CounterControl />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CounterControl from "@/components/Counter/CounterControl";
import CounterView from "@/components/Counter/CounterView";

export default {
  components: {
    CounterControl,
    CounterView
  }
};
</script>
