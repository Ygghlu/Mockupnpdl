<template>
  <div>

    <h2>Sale Order</h2>
    <VContainer>
      <VTable>
        <thead>
          <tr>
            <th class="text-left">
              Dale Order
            </th>
            <th class="text-left">
              sub
            </th>
            <th class="text-left">Item</th>
            <th class="text-left">Price</th>
            <th class="text-left">Customer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </VTable>



    </VContainer>
  </div>
</template>
  
<script setup >



const {data:sale} =await useFetch('/api/datatest')

console.log(sale)

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  }, { name: 'ABCD', calories: 167, }]





</script>