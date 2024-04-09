import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Estas coordenadas son solo un ejemplo
          longitude: -122.4324, // Puedes reemplazarlas por la ubicación que desees
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marcador de ejemplo */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"Ubicación Ejemplo"}
          description={"Esta es una descripción del marcador."}
        />
      </MapView>
    </View>
  );
};

// Aquí se definen los estilos del contenedor y el mapa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
