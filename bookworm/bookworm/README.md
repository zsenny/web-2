Tell-a-Tale

Programado por: Jaime Antonio De León Chapa, Nataly Sánchez Coronado y Fabiola Sarahí Cura González.

Aplicación web programada para ser un espacio abierto dedicado para toda persona que tenga una historia que contar; en esta aplicación puedes dar tus primeros pasos como creador de comic u otro estilo que quieran.

No se pide un nivel de historia o un nivel de dibujo, solo se tomará en cuenta que no sea contigo clasificado cómo ilegal, que cause daños y/o ofensas a una persona o un grupo de personas, que se apoye el odio o se incite a cualquier cosa peligrosa, todo esto aplica tanto para comics como para comentarios, a las personas con comentarios reportados se les darán advertencias, en caso de no hacer caso se eliminará la cuenta, en caso de los comics se daran advertencias, en caso de no cumplir, los cómics quedarán ocultos, cuando el creador modifique el comic volverá a ponerse visible.

Al descargar la aplicación en consola solo debe ponerse la instrucción de "yarn install" segudo de "yarn add react-router-dom@^5.3.0"

Dos carpetas principales, backend y tell-a-tale.

La carpeta src de backend está divida en controllers, models y routes.
Por cada página o acción tienen un archivo en routes, donde están escritos sus get, post, put, delete, los archivos en routes están conectados con los archivos en controller donde están dividas por página o acciones, que hacen la conexión con la carpeta de models, donde los archivos están dividas por página o acciones, los archivos en esta página se encargan de mandar a la base de datos los datos recibidos a través de los controllers.

La carpeta tell-a-tale tiene todos los archivos utilizados para el frontend, contiene la carpeta src dividida principalmente en pages, donde se encuentran todos los js por página, css donde están las hojas de estilo por cada pagina y componente, y la carpeta components donde se encuentran los componentes que se usan una o más veces, por ejemplo, topBar se coloca solo una vez y se muestra en todas las pantallas, tarjetas se usa para acceder a la pagina de los comic marcados como favoritos o que se presentan y te guían a donde está el comic con su descripción, o te mandan a la página de edición del comic o TarjetasCapComic que te lleva ya sea a leer el capitulo o a editar el capitulo.