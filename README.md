

<p align="center" >
  <img src="assets/logo_spaicer_test.png.png" width="70%">
</p>

<p align="center">
    <a href="https://www.spaicer.de/">Spaicer</a>: Scalable adaptive production systems through AI-based resilience optimization. <br>
    Powered by <a href="https://www.mydataeconomy.com/#/search">MyDataEconomy</a>
</p>
<p align="center">
  <a href="https://discord.gg/qDF38JDR3D" style="text-decoration:none;"><img src="https://img.shields.io/badge/Discord-9cf.svg?logo=discord" alt="Discord"></a>
</p>

## Motivation

in a globalized and interconnected business world, production interruptions including supply chain disruption have been the leading business risk for many years.

The ability of a company to permanently adapt to internal and external changes and disruptions is the "quest for resilience". Reinforced by a significant increase in complexity in production due to Industry 4.0, resilience management thus becomes an indispensable success factor for manufacturing companies.

The SPAICER project is developing a data-driven ecosystem based on lifelong, collaborative and low-threshold Smarter Resilience services by leveraging leading AI technologies and Industrie 4.0 standards with the goal of anticipating disruptions (anticipation) and optimally adapting production plans to active disruptions (reaction) at any time.


## Architecture
Needs to be done



## Install
### Prerequisits
You need to install <a href="https://nodejs.org/en/">node.js</a>

### Create azure translate service
You can simply use  <a href="https://azure.microsoft.com/de-de/services/cognitive-services/translator/"> the instructions</a> and create a free service. You will then need the url and permissionkeys.

### Installation

Clone this repository by
```
git clone hgit@github.com:Senseering/spaicer-translation-srs.git
cd spaicer-translation-srs
```
install node modules by

```
cd textpublisher
npm install
cd ..
cd service
npm install
```


### Configuration 
To configure the two workers you need to register a new datasource at the providing Manager. This datasource publishes raw texts that need to be translated.
