

const Footer = () => {
    return (
        <div className="py-8 flex flex-col items-center justify-center f-f-l">
            <div className="">
                <h1 className="text-5xl text-white font-bold">Agung Prasetyo</h1>
            </div>
            <div className="flex items-center py-12">
                <a className="cursor-pointer" href="https://github.com/agpprastyo" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                        <path  stroke="white" strokeLinecap="round" strokeLinejoin="round"
                            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                </a>


                <a className="cursor-pointer" href="https://x.com/agprastyo_" target="_blank" rel="noopener noreferrer">
                    <div className="px-9">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={18} viewBox="0 0 22 18" fill="none">
                            <path
                                d="M21 1.01001C20 1.50001 19.02 1.69901 18 2.00001C16.879 0.735013 15.217 0.665013 13.62 1.26301C12.023 1.86101 10.977 3.32301 11 5.00001V6.00001C7.755 6.08301 4.865 4.60501 3 2.00001C3 2.00001 -1.182 9.43301 7 13C5.128 14.247 3.261 15.088 1 15C4.308 16.803 7.913 17.423 11.034 16.517C14.614 15.477 17.556 12.794 18.685 8.77501C19.0218 7.55268 19.189 6.28987 19.182 5.02201C19.18 4.77301 20.692 2.25001 21 1.00901V1.01001Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </a>



                <a className="cursor-pointer" href="https://www.linkedin.com/in/agprastyo/" target="_blank" rel="noopener noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"
                         width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/>
                    </svg>

                </a>

            </div>


            <div className="text-white text-center">
                <p>© 2024 Agung Prasetyo. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;


