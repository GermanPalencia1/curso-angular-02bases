import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  };

  //Crear nuevo evento para escuchar cuando se crea un nuevo personaje
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    //Limpiar el formulario
    this.character = {name: '', power: 0};
  }
}
