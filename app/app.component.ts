import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 18.57509;
  lng: number = 73.741568;
  selectedMarker: marker;
  infoWindowOpened = null;
  previous_info_window = null;

  clickedMarker(label: string, index: number, infoWindow) {
    this.selectedMarker = this.markers[index];
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
    console.log(`clicked the marker: ${label || index}`);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

close_window(){
if (this.previous_info_window != null ) {
  this.previous_info_window.close()
  }    
}

// will fetch these from backend calls
  markers: marker[] = [
    {
      lat: 18.575097701618027,
      lng: 73.74156811898027,
      label: "A",
      draggable: false,
      popupText: "kit ka ghar in danger red",
      severity: 'danger',
    },
    {
      lat: 18.592376572786087,
      lng: 73.70653930689984,
      label: "B",
      draggable: false,
      popupText: "shruti ka ghar in fine blue",
      severity: 'fine',
    }
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  popupText: string;
  severity?: string;
}
