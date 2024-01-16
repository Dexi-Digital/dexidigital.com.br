/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'NavBar',

data() {
return {
showLocaleSwitcher: true,
};
},
methods: {
switchLanguage(language) {
this.$i18n.locale = language;
location.href = location.href;
},
setLanguageToPortuguese() {
this.switchLanguage('pt-BR');
},
setLanguageToEnglish() {
this.switchLanguage('en');
},
}
});
