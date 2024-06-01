import React from 'react'
const gallery= [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVRV35kxD-XuYl9kInJp5derGUxAPFOKrypsL7cyQvinGYiai8-5PVC8GqauMyt2e8eQ&usqp=CAU",
  "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-black-and-white-gym-room-with-a-row-of-equipment-image_2911173.jpg",
  "https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE=",
"https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
"https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=sph",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6Rnb7ExUvzTNrfYRuHz7hNnKMpiqBWlJ11S0QFfhwndbCOkc8lxZcGJ5PPy_jGLl6Po&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiac2UOBcqNMglVKRzbKVEzy6zhMAcqQSqJdkugyLgyga0SA12eZ92rr_GsO28ky4aGJI&usqp=CAU",
"https://prod-ne-cdn-media.puregym.com/media/823924/the-best-gym-cardio-workouts_blogheader-notitle.jpg?quality=80",
"https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
]
const Gallary = () => {
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallary