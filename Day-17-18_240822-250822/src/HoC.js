export const HoC = (Component) => {
    function EnhancedComponent(){
        return <div style={{backgroundColor:'lightblue'}}><Component value={200} /></div>
    }
    return EnhancedComponent
}