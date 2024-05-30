
                                        let rotation=0;
                                        function spinwheel(){
                                            const wheel=document.getElementById('wheel');
                                            const extraDegrees=Math.floor(5000+Math.random()*5000);
                                            rotation+=extraDegrees;
                                            wheel.style.transition='transfer 5s ease-out';
                                            wheel.style.transform='rotate(${rotation}deg)';
                                            //stop position
                                            setTimeout(()=>{
                                                const actualRotation=rotation%360;
                                                const sectorAngle=360/6;
                                                const StopAngle= (360-actualRotation)%360;
                                                const optionIndex=Math.floor(StopAngle%sectorAngle);
                                                const options=['Amar','Mayur','Sourabh','Sahil','Parth','Arjun'];
                                                alert("The wheel stopped at:${options[optionIndex]}");
                                            },5000);
                                        }
                                            