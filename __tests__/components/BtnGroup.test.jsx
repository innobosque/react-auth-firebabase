import { fireEvent, render,screen } from '@testing-library/react';
import { BtnGroup } from '../../src/components/BtnGroup';

describe('Componente BtnGropu', () => { 
    
    const user = {
        email: 'homegoma@hotmail.com'
    }
    test('Activr el loader del botón de acceso', () => {
        render(<BtnGroup loading={true} userBool={null} />);
        //fireEvent.click(screen.getByRole('button',{name: 'Acceso'}));
        expect(screen.getByRole('alert')).toBeTruthy();
    })
    
    test('Si hay usuario se mostrará el botón Logout',()=>{
        render(<BtnGroup loading={false} userBool={user} />);
        expect(screen.getByRole("button",{name: 'Logout'})).toBeTruthy();
        //screen.debug();
    })
 })