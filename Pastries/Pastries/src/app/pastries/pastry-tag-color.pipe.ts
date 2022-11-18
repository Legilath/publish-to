import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastryTagColor'
})
export class PastryTagColorPipe implements PipeTransform {

  transform(tag:string): string {

    tag = 'tag'+tag;

    return tag;
  }

}
