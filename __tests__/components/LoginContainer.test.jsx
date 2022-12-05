import { render,screen } from "@testing-library/react"
import { LoginContainer } from "../../src/components/LoginContainer"

describe('Pruebas sobre Componente LoginContainer', () => { 
    const title = 'Firebase Authentication';
    test(`Comprobar que el título de nivel 1 exista y su texto por defecto sea ${title}`,()=>{
        render(<LoginContainer />);
        const h1 = screen.getByRole('heading',{level: 1});
        expect(h1).toBeTruthy();
        expect(h1.innerHTML).toContain(title);
        //screen.debug();
        
    })

    test('Cambiar el título del componente',()=>{
        render(<LoginContainer  title="Prueba"/>);
        expect(screen.getByRole("heading",{level: 1}).innerHTML).toBe('Prueba')
    })
 })
