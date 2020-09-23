import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { SmartHomeService } from 'services/http/smart-home';

@Component({
  templateUrl: './smart-home.component.html',
  styleUrls: ['./smart-home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ SmartHomeService ]
})
export class SmartHomeComponent implements OnInit {
  readonly deviceTypes = [
    { label: 'Luz', value: 1, icon: 'emoji_objects' },
    { label: 'Ventilador', value: 2, icon: 'filter_vintage' },
    { label: 'Smart TV', value: 3, icon: 'tv' },
    { label: 'Bocina', value: 4, icon: 'speaker' },
    { label: 'Aire Acondicionado', value: 4, icon: 'ac_unit' },
  ];
  readonly sensorTypes = [
    { label: 'Movimiento', value: 10001, icon: '' },
    { label: 'Pruerta', value: 10002, icon: 'sensor_door' },
    { label: 'Ventana', value: 10003, icon: 'sensor_window' },
    { label: 'Temperatura', value: 10004, icon: '' },
  ];

  floorNames: string[];
  floors: {
    name: string;
    rooms: any[];
  }[] = [];

  syncDevices: any[];
  selectedDevice: any;

  constructor(private smarthome: SmartHomeService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const homeId = '0bab0908-85c0-47ee-a4a8-63fb69886be1';
    this.smarthome.home(homeId).subscribe(({ floorsName  }) => {
      this.floorNames = floorsName;
      // this.syncDevices = syncDevices;
      /*
      this.floors = floors.map(name => ({
        name,
        rooms: rooms.filter(({ floor }) => floor === name),
      }));
      */
      this.cdr.detectChanges();
    });
  }

  changeDeviceType(type: number) {
    this.updateDevice({ ...this.selectedDevice, type });
  }

  changeDeviceRoom(roomId: string) {
    this.updateDevice({ ...this.selectedDevice, roomId });
  }

  updateDevice(device: any) {
    this.smarthome.updateDevice(device)
    .subscribe(() => {
      this.selectedDevice = device;
      let sDev = this.syncDevices.find(({ uuid }) => uuid === device.uuid);
      sDev = device;
      this.cdr.detectChanges();
    });
  }

  toggleDevice() {

  }

  drop(event: CdkDragDrop<any[]>) {
    const { previousContainer, container, previousIndex, currentIndex } = event;
    console.log('drop', previousContainer, container);
    if (previousContainer === container) {
      console.log('move');
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      console.log('transfer', previousContainer.data, container.data);
      transferArrayItem(previousContainer.data,
        container.data,
        previousIndex,
        currentIndex);
    }
    this.cdr.detectChanges();
  }

  getIcon(type: number) {
    const typeMapping = {
      1: 'emoji_objects',
      2: 'filter_vintage',
      3: 'tv',
    };
    return typeMapping[type];
  }

}
