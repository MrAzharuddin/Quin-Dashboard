<script>
import {
    onMount
} from 'svelte'
import axios from 'axios';
import data from './Data'

// let data = []
// let error = null
// onMount(async ()=>{
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//         console.log(res.data)
//     } catch (e) {
//         error = e
//         console.log(error)
//     }
// })
</script>

<section>
    <table>
        <tr class="p-2">
            <th>Map</th>
            <th>Title</th>
            <th>Q Score</th>
            <th>From</th>
            <th>To</th>
            <th>Distance</th>
        </tr>
        {#each data as ele}
            <tr>
                <td>{ele._id}</td>
                <td>{ele.title}</td>
                <td>{ele.qScore}</td>
                <td>{ele.startedAt}</td>
                <td>{ele.endedAt}</td>
                <td>{ele.distance}</td>
            </tr>
        {/each}
    </table>
</section>
