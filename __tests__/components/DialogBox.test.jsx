import { render,screen } from "@testing-library/react";
import { DialogBox } from "../../src/components/DialogBox";

describe('Pruebas sobre el componente DialogBox', () => {
  const message = "Hi Xurxo";

  test("Se debe hacer un match con el snapshot del componente",()=>{
      const {container} = render(<DialogBox message={message} />);
      expect(container).toMatchSnapshot();
  })

  test(`Se debe encontar en el componente el texto "${message}"`,()=>{
    //Sin screen
    //const {getByTestId} = render(<DialogBox message={message} />);
    //expect(getByTestId('dialog-box').innerHTML).toContain(message);
    render(<DialogBox message={message} />);
    expect(screen.getByTestId('dialog-box').innerHTML).toBeTruthy();
    expect(screen.getByTestId('dialog-box').innerHTML).toContain(message);
  });

  test('Que el texto buscado se encuentre en un elemento "div"',()=>{
    render(<DialogBox message={message} />);
    const label = screen.getByRole("alert");
    expect(label).toBeTruthy();
    expect(label.nodeName).toBe("DIV");
  });

 


})