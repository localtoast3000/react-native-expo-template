export default class DarkTheme {
  dark = true;

  // Suffix C = contrast color
  // Preffix pa = Palette
  // Preffix bg = Background
  // Preffix gs = Greyscale

  main = {
    pa1: '#764ABC',
    pa2: '#4d4d4d',
    pa3: '#4d4d4d',
    pa4: '#4d4d4d',
    pa1C: '#ffffff',
    pa2C: '#ffffff',
    pa3C: '#ffffff',
    pa4C: '#ffffff',

    bg1: '#292929',
    bg1C: '#ffffff',

    gs0: '#ffffff',
    gs1: '#d9d9d9',
    gs2: '#bfbfbf',
    gs3: '#4d4d4d',
    gs4: '#333333',
    gs5: '#1a1a1a',
    gs6: '#0d0d0d',
    gs7: '#000000',
  };

  // @react-navigation/native
  // NavigationContainer theme propertys
  colors = {
    primary: this.main.pa1,
    background: this.main.bg1,
    card: this.main.gs5,
    text: this.main.gs2,
    border: this.main.gs5,
    notification: this.main.gs4,
  };
}
