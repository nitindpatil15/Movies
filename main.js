const data = [
    {
        title: "Hanuman",
        rating: "⭐⭐⭐⭐",
        cover:
          "https://i.pinimg.com/736x/aa/92/13/aa92130b5dcbb96bd933c40ae7d798e2.jpg",
        quality: "720p",
        link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
      },
      {
        title: "Matrix",
        rating: "⭐⭐⭐⭐",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaomTs006xL_NGfoi8Tv_MXSRa3JL-2V-K2A&usqp=CAU ",
        quality: "720p",
        link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
      },
    
      {
        title: "Hey Nana",
        rating: "⭐⭐⭐⭐",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_apo2dvoYz_8Yb42O--q49tCGN7rpS4mnDrxAmtnF2w&s",
        quality: "720p",
        link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
      },
  {
    title: "Gadar 2",
    rating: "⭐⭐⭐⭐",
    cover:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/poster/a/u/y/small-gadar-2-movie-poster-premium-quality-paper-poster-unframed-original-imagrubn8ffchvpf.jpeg?q=70&crop=false",
    quality: "720p",
    link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
  },
  {
    title: "Pushpa2 Trailer",
    rating: "⭐⭐⭐",
    cover:
      "https://i.pinimg.com/originals/fa/11/38/fa1138495d47260af2c799bb6b941838.jpg",
    quality: "720p",
    link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
  },
  {
    title: "Kabir Singh",
    rating: "⭐⭐⭐⭐⭐",
    cover:
      "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false ",
    quality: "720p",
    link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
  },
  {
    title: "Suryawanshi",
    rating: "⭐⭐⭐⭐",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8d_N9WNXquPPAO1S4dJETPoS_b2OxTQJgw&usqp=CAU",
    quality: "720p",
    link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
  },
  {
    title: "The Marvels",
    rating: "⭐⭐⭐⭐",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe20wK-Q7U-KkPLxkkw1wO2w46kGxvuoWjQ&usqp=CAU ",
    quality: "720p",
    link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9304077_x__adext__ptid_kwd-303629226711",
  },
  
];

data.map((val, i) => {
  document.getElementById("moviesDiv").innerHTML += `<div class="col-md-4 my-3">
    <div class='col-md-4'>
    <div class="card" style="width: 18rem;">
    <img src="${val.cover}" height="330px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.title}</h5>
      <p class="card-text">${val.rating}</p>
      <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto consequuntur voluptatem eum impedit recusandae saepe ipsum vitae sequi commodi.</p>
      <a href="${val.link}" class="btn btn-primary">Watch Movie</a>
    </div>
  </div>
    </div>`;
});
