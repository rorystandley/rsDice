rsDice
=======

Create a textual dice roll effect. Choose how many 'sides' your dice has. Specify the speed at which the dice rolls and then the duration of the roll. The plugin will change the text of a chosen div to give the effect of a changing dice roll, with a final choice for the result of the roll.

**Usage**
--

After including jQuery and the rsDice plugin, instantiate rsDice like so:

```javascript
$(function(){
    $('canvas').rsDice();
});
```

**Options**
--
<table class="table">
    <tbody>
        <tr>
            <th>option</th>
            <th>description</th>
            <th>default</th>
            <th>type</th>
        </tr>
        <tr>
            <td>number</td>
            <td>Numebr of sides for the dice</td>
            <td>6</td>
            <td>int</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>The speed of which the text changes</td>
            <td>100</td>
            <td>int</td>
        </tr>  
        <tr>
            <td>duration</td>
            <td>The length of time it takes for the dice to roll</td>
            <td>2000</td>
            <td>int</td>
        </tr> 
        <tr>
            <td>callBack</td>
            <td>Callback functio for when the roll has finished</td>
            <td></td>
            <td>function</td>
        </tr> 
    </tbody>
</table>

**Demo**
--
Click <a href="http://www.rstandley.co.uk/rsdice-jquery-plugin/" target="_blank">here</a> to view a demo