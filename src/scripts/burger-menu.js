class Burgermenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="sidebar"><input id="sidebar" class="toggle" type="checkbox" checked><label for="sidebar"
class="sidebarbutton"><img src="images/map.webp" class="burger" alt="Open Burger Menu"></label>
<div class="collapsible-contentSidebar">
<div class="collapsible-content-inside"><label for="sidebar">
        <div class="sidebarBigClose"></div>
    </label>
    <section>
    <input id="WildsBurger" class="toggle" type="checkbox">
    <label for="WildsBurger" class="SidebarHeading"><img src="images/wilds_logo.webp" class="Side_Logo" alt="Monster Hunter Wilds"></label><div class="CollSidebar"> 
<a href="wilds" class="GamePageLink"><h2>Game Page</h2></a><br>
<div class="NavbarWeapSelect">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsGS" checked>
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsLS">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsSnS">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsDB">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsHammer">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsHorn">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsLance">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsGunlance">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsSwaxe">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsCB">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsGlaive">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsLBG">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsHBG">
                    <input type="radio" class="radiobutton" name="BurgerWildsRadio" id="WildsBow">
                    <table class="BurgerWeaponTable">
                    <tbody><tr>
                        <td><label for="WildsGS" class="NavbarIBRadio"><img src="images/greatsword.webp" class="BurgerWeaponTableImg center" alt="Greatsword" id="BurgerWildsGS"></label></td>
                        <td><label for="WildsLS" class="NavbarIBRadio"><img src="images/longsword.webp" class="BurgerWeaponTableImg center" alt="Longsword" id="BurgerWildsLS"></label></td>
                        <td><label for="WildsSnS" class="NavbarIBRadio"><img src="images/sword_and_shield.webp" class="BurgerWeaponTableImg center" alt="Sword and Shield" id="BurgerWildsSnS"></label></td>
                        <td><label for="WildsDB" class="NavbarIBRadio"><img src="images/dual_blades.webp" class="BurgerWeaponTableImg center" alt="Dual Blades" id="BurgerWildsDB"></label></td>
                    </tr>
                    <tr>
                        <td><label for="WildsHammer" class="NavbarIBRadio"><img src="images/hammer.webp" class="BurgerWeaponTableImg center" alt="Hammer" id="BurgerWildsHammer"></label></td>
                        <td><label for="WildsHorn" class="NavbarIBRadio"><img src="images/hunting_horn.webp" class="BurgerWeaponTableImg center" alt="Hunting Horn" id="BurgerWildsHorn"></label></td>
                        <td><label for="WildsLance" class="NavbarIBRadio"><img src="images/lance.webp" class="BurgerWeaponTableImg center" alt="Lance" id="BurgerWildsLance"></label></td>
                        <td><label for="WildsGunlance" class="NavbarIBRadio"><img src="images/gunlance.webp" class="BurgerWeaponTableImg center" alt="Gunlance" id="BurgerWildsGunlance"></label></td>
                    </tr>
                    <tr>
                        <td><label for="WildsSwaxe" class="NavbarIBRadio"><img src="images/switch_axe.webp" class="BurgerWeaponTableImg center" alt="Switch Axe" id="BurgerWildsSwaxe"></label></td>
                        <td><label for="WildsCB" class="NavbarIBRadio"><img src="images/charge_blade.webp" class="BurgerWeaponTableImg center" alt="Charge Blade" id="BurgerWildsCB"></label></td>
                        <td><label for="WildsGlaive" class="NavbarIBRadio"><img src="images/insect_glaive.webp" class="BurgerWeaponTableImg center" alt="Insect Glaive" id="BurgerWildsGlaive"></label></td>
                        <td><label for="WildsBow" class="NavbarIBRadio"><img src="images/bow.webp" class="BurgerWeaponTableImg center" alt="Bow" id="BurgerWildsBow"></label></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for="WildsLBG" class="NavbarIBRadio"><img src="images/light_bowgun.webp" class="BurgerWeaponTableImg center" alt="Light Bowgun" id="BurgerWildsLBG"></label></td>
                        <td colspan="2"><label for="WildsHBG" class="NavbarIBRadio"><img src="images/heavy_bowgun.webp" class="BurgerWeaponTableImg center" alt="Heavy Bowgun" id="BurgerWildsHBG"></label></td>
                    </tr>
                    </tbody>
                </table>
                
                <div id="showWildsGS">
                <a href="wilds/guide/greatsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/greatsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/greatsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsLS">
                <a href="wilds/guide/longsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/longsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/longsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsSnS">
                <a href="wilds/guide/sword_and_shield" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/sword_and_shield"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/sword_and_shield"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsDB">
                <a href="wilds/guide/dual_blades" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/dual_blades"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/dual_blades"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsHammer">
                <a href="wilds/guide/hammer" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/hammer"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/hammer"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsHorn">
                <a href="wilds/guide/hunting_horn" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/hunting_horn"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/hunting_horn"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsLance">
                <a href="wilds/guide/lance" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/lance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/lance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsGunlance">
                <a href="wilds/guide/gunlance" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/gunlance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/gunlance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsSwaxe">
                <a href="wilds/guide/switch_axe" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/switch_axe"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/switch_axe"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsCB">
                <a href="wilds/guide/charge_blade" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/charge_blade"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/charge_blade"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsGlaive">
                <a href="wilds/guide/insect_glaive" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/insect_glaive"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/insect_glaive"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsBow">
                <a href="wilds/guide/bow" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/bow"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/bow"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsLBG">
                <a href="wilds/guide/light_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/light_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/light_bowgun"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWildsHBG">
                <a href="wilds/guide/heavy_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="wilds/endgame/heavy_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="wilds/progression/heavy_bowgun"class="GuideLink"><h2>Progression</h2></a></div>                
</div>    </div></section><br>

<section>
    <input id="RisebreakBurger" class="toggle" type="checkbox">
    <label for="RisebreakBurger" class="SidebarHeading"><img src="images/rise_logo.webp" class="Side_Logo" alt="Monster Hunter Rise"></label><div class="CollSidebar"> 
<a href="rise" class="GamePageLink"><h2>Game Page</h2></a><br>
<div class="NavbarWeapSelect">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseGS" checked>
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseLS">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseSnS">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseDB">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseHammer">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseHorn">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseLance">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseGunlance">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseSwaxe">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseCB">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseGlaive">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseLBG">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseHBG">
                    <input type="radio" class="radiobutton" name="BurgerRiseRadio" id="RiseBow">
                    <table class="BurgerWeaponTable">
                    <tbody><tr>
                        <td><label for="RiseGS" class="NavbarIBRadio"><img src="images/greatsword.webp" class="BurgerWeaponTableImg center" alt="Greatsword" id="BurgerRiseGS"></label></td>
                        <td><label for="RiseLS" class="NavbarIBRadio"><img src="images/longsword.webp" class="BurgerWeaponTableImg center" alt="Longsword" id="BurgerRiseLS"></label></td>
                        <td><label for="RiseSnS" class="NavbarIBRadio"><img src="images/sword_and_shield.webp" class="BurgerWeaponTableImg center" alt="Sword and Shield" id="BurgerRiseSnS"></label></td>
                        <td><label for="RiseDB" class="NavbarIBRadio"><img src="images/dual_blades.webp" class="BurgerWeaponTableImg center" alt="Dual Blades" id="BurgerRiseDB"></label></td>
                    </tr>
                    <tr>
                        <td><label for="RiseHammer" class="NavbarIBRadio"><img src="images/hammer.webp" class="BurgerWeaponTableImg center" alt="Hammer" id="BurgerRiseHammer"></label></td>
                        <td><label for="RiseHorn" class="NavbarIBRadio"><img src="images/hunting_horn.webp" class="BurgerWeaponTableImg center" alt="Hunting Horn" id="BurgerRiseHorn"></label></td>
                        <td><label for="RiseLance" class="NavbarIBRadio"><img src="images/lance.webp" class="BurgerWeaponTableImg center" alt="Lance" id="BurgerRiseLance"></label></td>
                        <td><label for="RiseGunlance" class="NavbarIBRadio"><img src="images/gunlance.webp" class="BurgerWeaponTableImg center" alt="Gunlance" id="BurgerRiseGunlance"></label></td>
                    </tr>
                    <tr>
                        <td><label for="RiseSwaxe" class="NavbarIBRadio"><img src="images/switch_axe.webp" class="BurgerWeaponTableImg center" alt="Switch Axe" id="BurgerRiseSwaxe"></label></td>
                        <td><label for="RiseCB" class="NavbarIBRadio"><img src="images/charge_blade.webp" class="BurgerWeaponTableImg center" alt="Charge Blade" id="BurgerRiseCB"></label></td>
                        <td><label for="RiseGlaive" class="NavbarIBRadio"><img src="images/insect_glaive.webp" class="BurgerWeaponTableImg center" alt="Insect Glaive" id="BurgerRiseGlaive"></label></td>
                        <td><label for="RiseBow" class="NavbarIBRadio"><img src="images/bow.webp" class="BurgerWeaponTableImg center" alt="Bow" id="BurgerRiseBow"></label></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for="RiseLBG" class="NavbarIBRadio"><img src="images/light_bowgun.webp" class="BurgerWeaponTableImg center" alt="Light Bowgun" id="BurgerRiseLBG"></label></td>
                        <td colspan="2"><label for="RiseHBG" class="NavbarIBRadio"><img src="images/heavy_bowgun.webp" class="BurgerWeaponTableImg center" alt="Heavy Bowgun" id="BurgerRiseHBG"></label></td>
                    </tr>
                    </tbody>
                </table>
                
                <div id="showRiseGS">
                <a href="rise/guide/greatsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/greatsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/greatsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseLS">
                <a href="rise/guide/longsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/longsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/longsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseSnS">
                <a href="rise/guide/sword_and_shield" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/sword_and_shield"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/sword_and_shield"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseDB">
                <a href="rise/guide/dual_blades" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/dual_blades"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/dual_blades"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseHammer">
                <a href="rise/guide/hammer" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/hammer"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/hammer"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseHorn">
                <a href="rise/guide/hunting_horn" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/hunting_horn"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/hunting_horn"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseLance">
                <a href="rise/guide/lance" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/lance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/lance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseGunlance">
                <a href="rise/guide/gunlance" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/gunlance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/gunlance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseSwaxe">
                <a href="rise/guide/switch_axe" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/switch_axe"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/switch_axe"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseCB">
                <a href="rise/guide/charge_blade" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/charge_blade"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/charge_blade"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseGlaive">
                <a href="rise/guide/insect_glaive" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/insect_glaive"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/insect_glaive"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseBow">
                <a href="rise/guide/bow" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/bow"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/bow"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseLBG">
                <a href="rise/guide/light_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/light_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/light_bowgun"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showRiseHBG">
                <a href="rise/guide/heavy_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="rise/endgame/heavy_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="rise/progression/heavy_bowgun"class="GuideLink"><h2>Progression</h2></a></div>                
</div>    </div></section></div><br>
<section>
    <input id="WorldborneBurger" class="toggle" type="checkbox">
    <label for="WorldborneBurger" class="SidebarHeading"><img src="images/world_logo.webp" class="Side_Logo" alt="Monster Hunter World"></label><div class="CollSidebar"> 
<a href="world" class="GamePageLink"><h2>Game Page</h2></a><br>
<div class="NavbarWeapSelect">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldGS" checked>
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldLS">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldSnS">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldDB">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldHammer">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldHorn">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldLance">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldGunlance">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldSwaxe">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldCB">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldGlaive">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldLBG">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldHBG">
                    <input type="radio" class="radiobutton" name="BurgerWorldRadio" id="WorldBow">
                    <table class="BurgerWeaponTable">
                    <tbody><tr>
                        <td><label for="WorldGS" class="NavbarIBRadio"><img src="images/greatsword.webp" class="BurgerWeaponTableImg center" alt="Greatsword" id="BurgerWorldGS"></label></td>
                        <td><label for="WorldLS" class="NavbarIBRadio"><img src="images/longsword.webp" class="BurgerWeaponTableImg center" alt="Longsword" id="BurgerWorldLS"></label></td>
                        <td><label for="WorldSnS" class="NavbarIBRadio"><img src="images/sword_and_shield.webp" class="BurgerWeaponTableImg center" alt="Sword and Shield" id="BurgerWorldSnS"></label></td>
                        <td><label for="WorldDB" class="NavbarIBRadio"><img src="images/dual_blades.webp" class="BurgerWeaponTableImg center" alt="Dual Blades" id="BurgerWorldDB"></label></td>
                    </tr>
                    <tr>
                        <td><label for="WorldHammer" class="NavbarIBRadio"><img src="images/hammer.webp" class="BurgerWeaponTableImg center" alt="Hammer" id="BurgerWorldHammer"></label></td>
                        <td><label for="WorldHorn" class="NavbarIBRadio"><img src="images/hunting_horn.webp" class="BurgerWeaponTableImg center" alt="Hunting Horn" id="BurgerWorldHorn"></label></td>
                        <td><label for="WorldLance" class="NavbarIBRadio"><img src="images/lance.webp" class="BurgerWeaponTableImg center" alt="Lance" id="BurgerWorldLance"></label></td>
                        <td><label for="WorldGunlance" class="NavbarIBRadio"><img src="images/gunlance.webp" class="BurgerWeaponTableImg center" alt="Gunlance" id="BurgerWorldGunlance"></label></td>
                    </tr>
                    <tr>
                        <td><label for="WorldSwaxe" class="NavbarIBRadio"><img src="images/switch_axe.webp" class="BurgerWeaponTableImg center" alt="Switch Axe" id="BurgerWorldSwaxe"></label></td>
                        <td><label for="WorldCB" class="NavbarIBRadio"><img src="images/charge_blade.webp" class="BurgerWeaponTableImg center" alt="Charge Blade" id="BurgerWorldCB"></label></td>
                        <td><label for="WorldGlaive" class="NavbarIBRadio"><img src="images/insect_glaive.webp" class="BurgerWeaponTableImg center" alt="Insect Glaive" id="BurgerWorldGlaive"></label></td>
                        <td><label for="WorldBow" class="NavbarIBRadio"><img src="images/bow.webp" class="BurgerWeaponTableImg center" alt="Bow" id="BurgerWorldBow"></label></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for="WorldLBG" class="NavbarIBRadio"><img src="images/light_bowgun.webp" class="BurgerWeaponTableImg center" alt="Light Bowgun" id="BurgerWorldLBG"></label></td>
                        <td colspan="2"><label for="WorldHBG" class="NavbarIBRadio"><img src="images/heavy_bowgun.webp" class="BurgerWeaponTableImg center" alt="Heavy Bowgun" id="BurgerWorldHBG"></label></td>
                    </tr>
                    </tbody>
                </table>
                
                <div id="showWorldGS">
                <a href="world/guide/greatsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/greatsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/greatsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldLS">
                <a href="world/guide/longsword" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/longsword"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/longsword"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldSnS">
                <a href="world/guide/sword_and_shield" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/sword_and_shield"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/sword_and_shield"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldDB">
                <a href="world/guide/dual_blades" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/dual_blades"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/dual_blades"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldHammer">
                <a href="world/guide/hammer" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/hammer"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/hammer"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldHorn">
                <a href="world/guide/hunting_horn" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/hunting_horn"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/hunting_horn"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldLance">
                <a href="world/guide/lance" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/lance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/lance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldGunlance">
                <a href="world/guide/gunlance" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/gunlance"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/gunlance"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldSwaxe">
                <a href="world/guide/switch_axe" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/switch_axe"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/switch_axe"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldCB">
                <a href="world/guide/charge_blade" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/charge_blade"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/charge_blade"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldGlaive">
                <a href="world/guide/insect_glaive" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/insect_glaive"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/insect_glaive"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldBow">
                <a href="world/guide/bow" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/bow"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/bow"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldLBG">
                <a href="world/guide/light_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/light_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/light_bowgun"class="GuideLink"><h2>Progression</h2></a></div>
                <div id="showWorldHBG">
                <a href="world/guide/heavy_bowgun" class="GuideLink"><h2>Guide</h2></a>
                <a href="world/endgame/heavy_bowgun"class="GuideLink"><h2>Endgame</h2></a>
                <a href="world/progression/heavy_bowgun"class="GuideLink"><h2>Progression</h2></a></div>                
</div>    </div></section><br>
    <a href="other"><img src="images/binoculars.webp"
            class="Side_Logo" alt="https://www.wiggler.pet/other"></a>
<a href="https://www.wiggler.pet"><img src="images/farcaster.webp"
        class="Side_Logo" alt="https://www.wiggler.pet"></a>
</div>
</div>
</div>`;
  }
}
if ("customElements" in window) {
  customElements.define("burger-menu", Burgermenu);
}
