import React from 'react'


import './styles.css'


function RecomendationItem () {
    return (
        <>
        <div id='recomendation-item'>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='prime-include-mobile'
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 13.705V.27h14.821v13.435z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 33.91L33.91 0h42.426L0 76.336V33.909z' fill='%23FFF'/%3E%3Cpath d='M13.776 37.568a4.039 4.039 0 00-1.051 1.82l3.748 3.749a3.897 3.897 0 001.82-1.052c.547-.547.77-1.131.669-1.752-.103-.62-.543-1.32-1.322-2.098-.788-.789-1.49-1.235-2.105-1.343-.616-.106-1.201.118-1.759.676zm-4.574 2.578c-.133-.133-.196-.253-.19-.365.007-.111.074-.23.2-.356l1.057-1.056c.224-.224.465-.257.722-.097l.474.269c.019-.57.154-1.142.407-1.72a4.923 4.923 0 011.025-1.51c.948-.947 2.036-1.36 3.263-1.238 1.228.122 2.414.758 3.563 1.907.789.789 1.34 1.615 1.657 2.477.315.863.398 1.688.246 2.474-.15.79-.529 1.485-1.135 2.091-.4.4-.844.719-1.328.958a3.907 3.907 0 01-1.436.41l3.12 3.12c.133.133.198.253.196.36-.001.105-.07.227-.207.364L19.43 49.64c-.127.127-.246.193-.358.2-.11.007-.231-.057-.365-.19l-9.504-9.505zM19.98 30.497c-.015-.807.069-1.473.248-1.997.18-.526.467-.986.865-1.384l.208-.208c.139-.139.264-.212.374-.22.11-.008.232.053.363.184l1.175 1.175c.121.12.182.237.183.347.003.112-.067.236-.206.375a4.726 4.726 0 01-.28.253c-.12.101-.263.236-.431.404a6.537 6.537 0 00-.742.923 5.993 5.993 0 00-.602 1.064l4.702 4.703c.12.12.182.237.183.347.003.111-.068.236-.206.374l-1.429 1.429c-.129.13-.25.196-.367.199-.115.003-.233-.055-.354-.176l-6.452-6.452c-.131-.131-.192-.252-.184-.363.008-.11.077-.23.207-.359l1.07-1.07c.23-.23.47-.266.725-.11l.95.562zM23.09 25.971c-.131-.13-.193-.25-.186-.36.007-.109.073-.228.2-.354l1.399-1.399c.136-.136.257-.205.361-.207.104-.002.223.062.353.192l6.446 6.446c.121.121.183.237.185.346.002.11-.064.232-.2.368l-1.399 1.399c-.126.127-.247.19-.36.193-.115.002-.233-.057-.354-.178l-6.446-6.446zm-.39-2.518c-.37.37-.765.569-1.184.595-.419.028-.796-.126-1.131-.461-.337-.337-.491-.714-.463-1.133.028-.418.227-.813.597-1.182.368-.369.763-.568 1.181-.595.42-.029.796.126 1.133.462.335.335.49.712.46 1.131-.025.42-.225.814-.593 1.183zM29.412 20.555c.198-.839.439-1.532.722-2.08a5.916 5.916 0 011.083-1.483c.88-.88 1.793-1.207 2.741-.983.187-.81.432-1.503.735-2.08a6.45 6.45 0 011.157-1.57c.684-.684 1.394-1.037 2.127-1.056.732-.019 1.421.291 2.061.932l4.846 4.845c.12.12.179.234.18.342.001.108-.068.233-.203.369l-1.408 1.408c-.128.127-.249.192-.362.196-.113.004-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.231-.636-1.827-.04-.529.529-.942 1.18-1.242 1.955l.137.138 4.846 4.845c.12.12.179.234.18.342.001.109-.066.232-.203.369l-1.409 1.408c-.126.126-.247.191-.36.195-.114.005-.23-.054-.349-.173l-4.406-4.406c-.622-.622-1.232-.635-1.828-.039a5.339 5.339 0 00-1.243 1.983l4.97 4.97c.119.119.179.233.18.342 0 .108-.067.231-.204.368l-1.407 1.407c-.127.127-.248.193-.361.196-.113.004-.23-.053-.35-.173l-6.327-6.327c-.128-.129-.188-.248-.18-.356.009-.109.076-.227.204-.355l1.055-1.055c.225-.225.461-.26.712-.108l.488.253zM43.7 7.205c-.919.919-.924 1.974-.018 3.167.454-.31.915-.7 1.384-1.17.488-.487.772-.91.855-1.268.082-.358-.02-.68-.305-.964-.56-.561-1.2-.482-1.916.235m2.683 3.084c-.546.546-1.068.97-1.569 1.273.654.54 1.275.774 1.864.7.588-.071 1.216-.441 1.886-1.111.268-.268.513-.544.735-.83.222-.283.506-.704.847-1.26a.929.929 0 01.132-.186c.162-.162.346-.14.551.065l.614.614c.142.142.22.262.236.364.015.1-.018.236-.099.405a9.28 9.28 0 01-1.85 2.598c-1.185 1.185-2.4 1.794-3.64 1.824-1.241.032-2.427-.517-3.557-1.647-1.157-1.158-1.74-2.39-1.747-3.699-.008-1.309.566-2.542 1.723-3.7.89-.89 1.785-1.385 2.689-1.486.902-.102 1.686.18 2.354.849.667.667.903 1.441.705 2.325-.198.883-.823 1.85-1.874 2.902' fill='%23008BB3'/%3E%3Cg transform='rotate(-45 60.167 28.868)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M14.513.275h-2.477c-.126 0-.483-.05-.58.17L5.911 9.22l-2.503-3.12a.369.369 0 00-.307-.163H.367a.37.37 0 00-.33.202.358.358 0 00.039.38l5.757 7.046c.07.09.178.14.291.14h.017a.366.366 0 00.295-.168L14.686.963c.334-.45-.04-.688-.173-.688' fill='%23F7981C' mask='url(%23b)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" 
                        alt="prime-video" 
                    />
                    <img  className='prime-include'
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                        alt="prime video" 
                    />
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/85132c976bad8661aac0c9487a9400d1bd1de7dd45cd6fa1be48b5e724f6a0d0._UR1920,1080_RI_SX712_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
        </div>
        </>
    )
}


export default RecomendationItem