"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74475],{79952:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>c,data:()=>r});var o=t(6254);const i={},c=(0,t(52753).A)(i,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a[8]||(a[8]=(0,o.Lk)("h1",{id:"tuya-2ct",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-2ct"},[(0,o.Lk)("span",null,"Tuya 2CT")])],-1)),(0,o.Lk)("table",null,[a[6]||(a[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[a[2]||(a[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"2CT")],-1)),(0,o.Lk)("tr",null,[a[1]||(a[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Bidirectional energy meter with 80A current clamp")],-1)),a[4]||(a[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"ac_frequency, voltage, power_a, power_b, current_a, current_b, power_factor_a, power_factor_b, energy_a, energy_b, update_frequency, timestamp_a, timestamp_b, calibration_ac_frequency, calibration_voltage, calibration_power_a, calibration_current_a, calibration_power_b, calibration_current_b")],-1)),a[5]||(a[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/2CT.png",alt:"Tuya 2CT"})])],-1))])]),a[9]||(a[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>a[7]||(a[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,o.Fv)('<ul><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>ac_frequency_precision</code>: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric"><span>Power b (numeric)</span></a></h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric"><span>Current b (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-factor-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-a-numeric"><span>Power factor a (numeric)</span></a></h3><p>Instantaneous measured power factor (phase A). Value can be found in the published state on the <code>power_factor_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-b-numeric"><span>Power factor b (numeric)</span></a></h3><p>Instantaneous measured power factor (phase B). Value can be found in the published state on the <code>power_factor_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="energy-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-a-numeric"><span>Energy a (numeric)</span></a></h3><p>Sum of consumed energy (phase A). Value can be found in the published state on the <code>energy_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-b-numeric"><span>Energy b (numeric)</span></a></h3><p>Sum of consumed energy (phase B). Value can be found in the published state on the <code>energy_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="update-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#update-frequency-numeric"><span>Update frequency (numeric)</span></a></h3><p>Update frequency. Value can be found in the published state on the <code>update_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;update_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>60</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="timestamp-a-numeric" tabindex="-1"><a class="header-anchor" href="#timestamp-a-numeric"><span>Timestamp a (numeric)</span></a></h3><p>Timestamp at power measure (phase a). Value can be found in the published state on the <code>timestamp_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="timestamp-b-numeric" tabindex="-1"><a class="header-anchor" href="#timestamp-b-numeric"><span>Timestamp b (numeric)</span></a></h3><p>Timestamp at power measure (phase b). Value can be found in the published state on the <code>timestamp_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="calibration-ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-ac-frequency-numeric"><span>Calibration ac frequency (numeric)</span></a></h3><p>Calibration AC frequency. Value can be found in the published state on the <code>calibration_ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_ac_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibration-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-voltage-numeric"><span>Calibration voltage (numeric)</span></a></h3><p>Calibration voltage. Value can be found in the published state on the <code>calibration_voltage</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_voltage&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibration-power-a-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-power-a-numeric"><span>Calibration power a (numeric)</span></a></h3><p>Calibration power A. Value can be found in the published state on the <code>calibration_power_a</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_power_a&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibration-current-a-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-current-a-numeric"><span>Calibration current a (numeric)</span></a></h3><p>Calibration current A. Value can be found in the published state on the <code>calibration_current_a</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_current_a&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibration-power-b-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-power-b-numeric"><span>Calibration power b (numeric)</span></a></h3><p>Calibration power B. Value can be found in the published state on the <code>calibration_power_b</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_power_b&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibration-current-b-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-current-b-numeric"><span>Calibration current b (numeric)</span></a></h3><p>Calibration current B. Value can be found in the published state on the <code>calibration_current_b</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_current_b&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1.5</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p>',40))])}]]),r=JSON.parse('{"path":"/devices/2CT.html","title":"Tuya 2CT control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya 2CT control via MQTT","description":"Integrate your Tuya 2CT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:02:57.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Power factor a (numeric)","slug":"power-factor-a-numeric","link":"#power-factor-a-numeric","children":[]},{"level":3,"title":"Power factor b (numeric)","slug":"power-factor-b-numeric","link":"#power-factor-b-numeric","children":[]},{"level":3,"title":"Energy a (numeric)","slug":"energy-a-numeric","link":"#energy-a-numeric","children":[]},{"level":3,"title":"Energy b (numeric)","slug":"energy-b-numeric","link":"#energy-b-numeric","children":[]},{"level":3,"title":"Update frequency (numeric)","slug":"update-frequency-numeric","link":"#update-frequency-numeric","children":[]},{"level":3,"title":"Timestamp a (numeric)","slug":"timestamp-a-numeric","link":"#timestamp-a-numeric","children":[]},{"level":3,"title":"Timestamp b (numeric)","slug":"timestamp-b-numeric","link":"#timestamp-b-numeric","children":[]},{"level":3,"title":"Calibration ac frequency (numeric)","slug":"calibration-ac-frequency-numeric","link":"#calibration-ac-frequency-numeric","children":[]},{"level":3,"title":"Calibration voltage (numeric)","slug":"calibration-voltage-numeric","link":"#calibration-voltage-numeric","children":[]},{"level":3,"title":"Calibration power a (numeric)","slug":"calibration-power-a-numeric","link":"#calibration-power-a-numeric","children":[]},{"level":3,"title":"Calibration current a (numeric)","slug":"calibration-current-a-numeric","link":"#calibration-current-a-numeric","children":[]},{"level":3,"title":"Calibration power b (numeric)","slug":"calibration-power-b-numeric","link":"#calibration-power-b-numeric","children":[]},{"level":3,"title":"Calibration current b (numeric)","slug":"calibration-current-b-numeric","link":"#calibration-current-b-numeric","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/2CT.md"}')}}]);