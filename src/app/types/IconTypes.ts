
export interface IconProps {
    name: string; // El nombre del ícono según la biblioteca que estés usando
    size?: string; // Tamaño opcional del ícono
    color?: string; // Color opcional del ícono
    className?: string; // Clase CSS adicional para personalizar el ícono
    onClick?: () => void; // Función opcional para manejar eventos de clic
}