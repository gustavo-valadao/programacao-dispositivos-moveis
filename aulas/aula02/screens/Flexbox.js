import { View } from "react-native";

function Flexbox() {
  return (
    // Observações:  
    // é obrigatório definir o tamanho da view. Por esse motivo é necessário definir "flex:1" ou heigth/width
    // Na web, a flex direction default é em row (linha). No mobile, o default é column. Note que é a orientação base do visor.
    // Bordas só são colocadas em views.
    // A unidade padrão é Android é "dp" (density-independent pixel). Por isso os valores são declarados sem unidade adicional (ex: "px").
    // -- Inclusive, se for colocar uma unidade em % (ex:100%), é necessário colocar como string ("100%"), já que ele nativamente espera um número.
    <View style={{ 
            flex: 1, 
            flexDirection: "column",      /* row, column */
            justifyContent: "space-around",   /* flex-start, center, flex-end, space-between, space-around, space-evenly */
            alignItems: "center",     /* flex-start, flex-end, center, stretch, baseline */
            backgroundColor: "red"
        }}>

        <View style={{ height: 50, width:50, backgroundColor: "blue"}}>
        </View>

        <View style={{ height: 50, width:50, backgroundColor: "green", borderRadius: 16}}>
        </View>

        <View style={{ height: 50, width:50, backgroundColor: "yellow"}}>
        </View>

    </View>
  )
}

export default Flexbox;
