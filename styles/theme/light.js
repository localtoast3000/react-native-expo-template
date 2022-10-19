export default class LightTheme {
  dark = false;

  // Suffix C = contrast color
  // Preffix pa = Palette
  // Preffix bg = Background
  // Preffix gs = Greyscale

  main = {
    pa1: '#4285F4',
    pa2: '#DB4437',
    pa3: '#F4B400',
    pa4: '#0F9D58',
    pa1C: '#ffffff',
    pa2C: '#ffffff',
    pa3C: '#ffffff',
    pa4C: '#ffffff',

    bg1: '#ffffff',
    bg1C: '#0d0d0d',

    gs0: '#000000',
    gs1: '#0d0d0d',
    gs2: '#1a1a1a',
    gs3: '#333333',
    gs4: '#4d4d4d',
    gs5: '#bfbfbf',
    gs6: '#fafafa',
    gs7: '#ffffff',
  };

  // @react-navigation/native
  // NavigationContainer theme propertys
  colors = {
    primary: this.main.pa1,
    background: this.main.bg1,
    card: this.main.gs6,
    text: this.main.gs4,
    border: this.main.gs6,
    notification: this.main.gs4,
  };
}
