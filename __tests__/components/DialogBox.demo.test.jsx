import { render } from "@testing-library/react";
import { DialogBox } from "../../src/components/DialogBox";

describe('Pruebas sobre el componente DialogBox', () => {
  const message = "Hi Xurxo";

  //Si tenemos prop-types y definidos nos saltaría el error aquí
  /*
  test('Falta la property `message`. Recordemos que tenemos instalados los props-types en este componente. ', () => {
    render(<DialogBox />);
  });
  */

  test('Cargar el atributo "message" del component. getByText y container.querySelector',()=>{
    //render(<DialogBox message={message} />).debug();
    const {container,getByText} = render(<DialogBox message={message} />);
    expect(getByText(message)).toBeTruthy();
    const textEl = container.querySelector('.dialog-box').innerHTML;
    expect(textEl).toContain(message);
  })

  test('Obtener el texto de un elemento por data-testid',()=>{
    const {getByTestId} = render(<DialogBox message={message}/>);
    const txt = getByTestId('dialog-box').innerHTML;
    expect(txt).toBe(message);
  })


})