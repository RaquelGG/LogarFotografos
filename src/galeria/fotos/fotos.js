import img1 from "./miniaturas/1.jpg"
import img2 from "./miniaturas/2.jpg"
import img3 from "./miniaturas/3.jpg"
import img4 from "./miniaturas/4.jpg"
import img5 from "./miniaturas/5.jpg"
import img6 from "./miniaturas/6.jpg"
import img7 from "./miniaturas/7.jpg"
import img8 from "./miniaturas/8.jpg"
import img9 from "./miniaturas/9.jpg"
import img10 from "./miniaturas/10.jpg"
import img11 from "./miniaturas/11.jpg"
import img12 from "./miniaturas/12.jpg"
import img13 from "./miniaturas/13.jpg"
import img14 from "./miniaturas/14.jpg"

export async function obtenerGaleria() {
  try {
      const response = await fetch(`http://localhost:3213/comprobarUsuario`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: user, pass: pass})
      });
      let respuesta = await response.text();
      
      console.log(respuesta);
      return respuesta == 1;
  } catch {
      console.error("ERROR: Nombre de usuario o contraseña incorrecta");
  }
  return false;
}

export const items = [
    {
      itemId: 'sample-id',
      mediaUrl: img1,
      metaData: {
        type: 'image',
        height: 2,
        width: 4,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [1, 4],
        link: {
          url: img1,
          target: '_blank'
        },
      }
    },
    {
      src: img4,
      width: 3,
      height: 2
    },
    {
      src: img2,
      width: 3,
      height: 2
    },
    {
      src: img3,
      width: 4,
      height: 2,
    },
    { // Video item:
      src: 'https://player.vimeo.com/video/327919041',
        type: 'video',
        height: 4,
        width: 6,
    },
    {
      src: "https://cdn0.bodas.net/emp/fotos/1/8/4/0/7/t40_15894842-584673431741671-9035533858770220959-n_1_18407.jpg",
      width: 7,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",

      width: 8,
      height: 6
    },
    {
      src: img5,
      width: 3,
      height: 2
    },
    {
      src: img6,
      width: 3,
      height: 2
    },
    {
      src: img7,
      width: 3,
      height: 2
    },
    {
      src: img8,
      width: 5,
      height: 2
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: img12,
      width: 2,
      height: 4
    },
    {
      src: img13,
      width: 3,
      height: 2
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: img9,
      width: 3,
      height: 2
    },
    {
      src: img10,
      width: 3,
      height: 2
    },
    {
      src: img11,
      width: 3,
      height: 2
    },
    {
      src: img14,
      width: 6,
      height: 2
    },
  ];