"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83337],{15710:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>r});var i=o(6254);const a={},n=(0,o(52753).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"efekta-efekta-pst-pow-duo-v1-lr",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-pst-pow-duo-v1-lr"},[(0,i.Lk)("span",null,"EFEKTA EFEKTA_PST_POW_DUO_V1_LR")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"EFEKTA_PST_POW_DUO_V1_LR")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=EFEKTA"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Water, gas smart pressure monitor with two sensors, two power supply")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"pressure, bar, psi, temperature, pressure_offset, raw_temperature_calibration, mains_voltage, battery, battery_low, uptime, reading_interval, tx_radio_power, smart_sleep, config_report_enable, comparison_previous_data")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_PST_POW_DUO_V1_LR.png",alt:"EFEKTA EFEKTA_PST_POW_DUO_V1_LR"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="pressure-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#pressure-numeric-1-endpoint"><span>Pressure (numeric, 1 endpoint)</span></a></h3><p>Measured pressure value оf the first sensor in kPa. Value can be found in the published state on the <code>pressure_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p><h3 id="bar-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#bar-numeric-1-endpoint"><span>Bar (numeric, 1 endpoint)</span></a></h3><p>Measured pressure value оf the first sensor in bar. Value can be found in the published state on the <code>bar_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>bar</code>.</p><h3 id="psi-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#psi-numeric-1-endpoint"><span>Psi (numeric, 1 endpoint)</span></a></h3><p>Measured pressure value оf the first sensor in psi. Value can be found in the published state on the <code>psi_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>psi</code>.</p><h3 id="temperature-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-1-endpoint"><span>Temperature (numeric, 1 endpoint)</span></a></h3><p>Measured value of the first temperature sensor. Value can be found in the published state on the <code>temperature_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="pressure-offset-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#pressure-offset-numeric-1-endpoint"><span>Pressure offset (numeric, 1 endpoint)</span></a></h3><p>Adjust first pressure sensor. Value can be found in the published state on the <code>pressure_offset_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pressure_offset_1&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>kPa</code>.</p><h3 id="raw-temperature-calibration-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#raw-temperature-calibration-numeric-1-endpoint"><span>Raw temperature calibration (numeric, 1 endpoint)</span></a></h3><p>Adjust first temperature sensor. Value can be found in the published state on the <code>raw_temperature_calibration_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;raw_temperature_calibration_1&quot;: NEW_VALUE}</code>. The minimal value is <code>-8192</code> and the maximum value is <code>8192</code>. The unit of this value is <code>raw unit</code>.</p><h3 id="pressure-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#pressure-numeric-2-endpoint"><span>Pressure (numeric, 2 endpoint)</span></a></h3><p>Measured pressure value оf the second sensor in kPa. Value can be found in the published state on the <code>pressure_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p><h3 id="bar-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#bar-numeric-2-endpoint"><span>Bar (numeric, 2 endpoint)</span></a></h3><p>Measured pressure value оf the second sensor in bar. Value can be found in the published state on the <code>bar_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>bar</code>.</p><h3 id="psi-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#psi-numeric-2-endpoint"><span>Psi (numeric, 2 endpoint)</span></a></h3><p>Measured pressure value оf the second sensor in psi. Value can be found in the published state on the <code>psi_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>psi</code>.</p><h3 id="temperature-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-2-endpoint"><span>Temperature (numeric, 2 endpoint)</span></a></h3><p>Measured value of the second temperature sensor. Value can be found in the published state on the <code>temperature_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="pressure-offset-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#pressure-offset-numeric-2-endpoint"><span>Pressure offset (numeric, 2 endpoint)</span></a></h3><p>Adjust second pressure sensor. Value can be found in the published state on the <code>pressure_offset_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pressure_offset_2&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>kPa</code>.</p><h3 id="raw-temperature-calibration-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#raw-temperature-calibration-numeric-2-endpoint"><span>Raw temperature calibration (numeric, 2 endpoint)</span></a></h3><p>Adjust second temperature sensor. Value can be found in the published state on the <code>raw_temperature_calibration_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;raw_temperature_calibration_2&quot;: NEW_VALUE}</code>. The minimal value is <code>-8192</code> and the maximum value is <code>8192</code>. The unit of this value is <code>raw unit</code>.</p><h3 id="mains-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#mains-voltage-numeric"><span>Mains voltage (numeric)</span></a></h3><p>Mains voltage. Value can be found in the published state on the <code>mains_voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mains_voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Empty battery indicator. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="uptime-numeric" tabindex="-1"><a class="header-anchor" href="#uptime-numeric"><span>Uptime (numeric)</span></a></h3><p>Uptime. Value can be found in the published state on the <code>uptime</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hours</code>.</p><h3 id="reading-interval-numeric" tabindex="-1"><a class="header-anchor" href="#reading-interval-numeric"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval in seconds, by default 10 seconds. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>360</code>. The unit of this value is <code>sec</code>.</p><h3 id="tx-radio-power-enum" tabindex="-1"><a class="header-anchor" href="#tx-radio-power-enum"><span>Tx radio power (enum)</span></a></h3><p>Set TX Radio Power, dbm. Value can be found in the published state on the <code>tx_radio_power</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tx_radio_power&quot;: NEW_VALUE}</code>. The possible values are: <code>4dbm</code>, <code>19dbm</code>.</p><h3 id="smart-sleep-binary" tabindex="-1"><a class="header-anchor" href="#smart-sleep-binary"><span>Smart sleep (binary)</span></a></h3><p>Enable Smart Sleep, short wakeup every 2-7 seconds. Value can be found in the published state on the <code>smart_sleep</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;smart_sleep&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> smart sleep is ON, if <code>OFF</code> OFF.</p><h3 id="config-report-enable-binary" tabindex="-1"><a class="header-anchor" href="#config-report-enable-binary"><span>Config report enable (binary)</span></a></h3><p>Enable reporting based on reporting configuration. Value can be found in the published state on the <code>config_report_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_report_enable&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> config report enable is ON, if <code>OFF</code> OFF.</p><h3 id="comparison-previous-data-binary" tabindex="-1"><a class="header-anchor" href="#comparison-previous-data-binary"><span>Comparison previous data (binary)</span></a></h3><p>Enable сontrol of comparison with previous data. Value can be found in the published state on the <code>comparison_previous_data</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comparison_previous_data&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> comparison previous data is ON, if <code>OFF</code> OFF.</p>',44))])}]]),r=JSON.parse('{"path":"/devices/EFEKTA_PST_POW_DUO_V1_LR.html","title":"EFEKTA EFEKTA_PST_POW_DUO_V1_LR control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_PST_POW_DUO_V1_LR control via MQTT","description":"Integrate your EFEKTA EFEKTA_PST_POW_DUO_V1_LR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-18T14:54:46.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Pressure (numeric, 1 endpoint)","slug":"pressure-numeric-1-endpoint","link":"#pressure-numeric-1-endpoint","children":[]},{"level":3,"title":"Bar (numeric, 1 endpoint)","slug":"bar-numeric-1-endpoint","link":"#bar-numeric-1-endpoint","children":[]},{"level":3,"title":"Psi (numeric, 1 endpoint)","slug":"psi-numeric-1-endpoint","link":"#psi-numeric-1-endpoint","children":[]},{"level":3,"title":"Temperature (numeric, 1 endpoint)","slug":"temperature-numeric-1-endpoint","link":"#temperature-numeric-1-endpoint","children":[]},{"level":3,"title":"Pressure offset (numeric, 1 endpoint)","slug":"pressure-offset-numeric-1-endpoint","link":"#pressure-offset-numeric-1-endpoint","children":[]},{"level":3,"title":"Raw temperature calibration (numeric, 1 endpoint)","slug":"raw-temperature-calibration-numeric-1-endpoint","link":"#raw-temperature-calibration-numeric-1-endpoint","children":[]},{"level":3,"title":"Pressure (numeric, 2 endpoint)","slug":"pressure-numeric-2-endpoint","link":"#pressure-numeric-2-endpoint","children":[]},{"level":3,"title":"Bar (numeric, 2 endpoint)","slug":"bar-numeric-2-endpoint","link":"#bar-numeric-2-endpoint","children":[]},{"level":3,"title":"Psi (numeric, 2 endpoint)","slug":"psi-numeric-2-endpoint","link":"#psi-numeric-2-endpoint","children":[]},{"level":3,"title":"Temperature (numeric, 2 endpoint)","slug":"temperature-numeric-2-endpoint","link":"#temperature-numeric-2-endpoint","children":[]},{"level":3,"title":"Pressure offset (numeric, 2 endpoint)","slug":"pressure-offset-numeric-2-endpoint","link":"#pressure-offset-numeric-2-endpoint","children":[]},{"level":3,"title":"Raw temperature calibration (numeric, 2 endpoint)","slug":"raw-temperature-calibration-numeric-2-endpoint","link":"#raw-temperature-calibration-numeric-2-endpoint","children":[]},{"level":3,"title":"Mains voltage (numeric)","slug":"mains-voltage-numeric","link":"#mains-voltage-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Uptime (numeric)","slug":"uptime-numeric","link":"#uptime-numeric","children":[]},{"level":3,"title":"Reading interval (numeric)","slug":"reading-interval-numeric","link":"#reading-interval-numeric","children":[]},{"level":3,"title":"Tx radio power (enum)","slug":"tx-radio-power-enum","link":"#tx-radio-power-enum","children":[]},{"level":3,"title":"Smart sleep (binary)","slug":"smart-sleep-binary","link":"#smart-sleep-binary","children":[]},{"level":3,"title":"Config report enable (binary)","slug":"config-report-enable-binary","link":"#config-report-enable-binary","children":[]},{"level":3,"title":"Comparison previous data (binary)","slug":"comparison-previous-data-binary","link":"#comparison-previous-data-binary","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/EFEKTA_PST_POW_DUO_V1_LR.md"}')}}]);