import { useParams } from 'react-router-dom'
import './StudentVisa.css'
import Footer from '../../shared/Footer'
const StudentVisa = () => {
    let content
    const {region} = useParams()

// kamrul(CEO), imran(country manager) , shakil(europian co-ordinator) , saiful(brunch manager sylhet office) , mahfuz(it support) , 
    content = (
        <div className='w-full bg-gray-100'>
            <div className='st-header h-[20vh]'>
                <div className='max-w-[1300px] mx-auto'>
                    <p className='text-[white] pt-[30%] md:pt-20 lg:pt-28 pl-4 text-lg lg:text-4xl'>Student visa for students in <span className='uppercase'>{region}</span></p>
                </div>
            </div>
            
            {region === 'uk' && 
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4'>Your can apply through us:</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Processing duration: 3-5 months.</p>
                    <p className='text-xs'>Though it may vary according to the university.</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Required documents:</p>
                    <p className='pl-4 text-lg'>1. bank statement</p>
                    <p className='pl-4 text-lg'>2. bank statement</p>
                    <p className='pl-4 text-lg'>3. bank statement</p>
                    <p className='pl-4 text-lg'>4. bank statement</p>
                    <p className='pl-4 text-lg'>5. bank statement</p>
                    <p className='pl-4 text-lg'>6. bank statement</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Overview of application process:</p>
                    <div className='text-justify p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                    </div>
                </div>

            </div>}
            
            {region === 'usa' && 
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4'>Your can apply through us:</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Processing duration: 3-5 months.</p>
                    <p className='text-xs'>Though it may vary according to the university.</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Required documents:</p>
                    <p className='pl-4 text-lg'>1. bank statement</p>
                    <p className='pl-4 text-lg'>2. bank statement</p>
                    <p className='pl-4 text-lg'>3. bank statement</p>
                    <p className='pl-4 text-lg'>4. bank statement</p>
                    <p className='pl-4 text-lg'>5. bank statement</p>
                    <p className='pl-4 text-lg'>6. bank statement</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Overview of application process:</p>
                    <div className='text-justify p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                    </div>
                </div>

            </div>}
            
            {region === 'canada' && 
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4'>Your can apply through us:</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Processing duration: 3-5 months.</p>
                    <p className='text-xs'>Though it may vary according to the university.</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Required documents:</p>
                    <p className='pl-4 text-lg'>1. bank statement</p>
                    <p className='pl-4 text-lg'>2. bank statement</p>
                    <p className='pl-4 text-lg'>3. bank statement</p>
                    <p className='pl-4 text-lg'>4. bank statement</p>
                    <p className='pl-4 text-lg'>5. bank statement</p>
                    <p className='pl-4 text-lg'>6. bank statement</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Overview of application process:</p>
                    <div className='text-justify p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                    </div>
                </div>

            </div>}
            
            {region === 'australia' && 
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4'>Your can apply through us:</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Processing duration: 3-5 months.</p>
                    <p className='text-xs'>Though it may vary according to the university.</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Required documents:</p>
                    <p className='pl-4 text-lg'>1. bank statement</p>
                    <p className='pl-4 text-lg'>2. bank statement</p>
                    <p className='pl-4 text-lg'>3. bank statement</p>
                    <p className='pl-4 text-lg'>4. bank statement</p>
                    <p className='pl-4 text-lg'>5. bank statement</p>
                    <p className='pl-4 text-lg'>6. bank statement</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Overview of application process:</p>
                    <div className='text-justify p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                    </div>
                </div>

            </div>}
            
            {region === 'europe' && 
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4'>Your can apply through us:</p>
                    {/* uk , usa,canada, aus ,europe(grance,itali,denmark,lithunia,hungery,croatia,multa) */}
                    <p className='text-teal-800 font-bold'>France</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                    <p className='text-teal-800 font-bold'>Itali</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                    <p className='text-teal-800 font-bold'>Denmark</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                    <p className='text-teal-800 font-bold'>Lithunia</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                    <p className='text-teal-800 font-bold'>Croatia</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                    <p className='text-teal-800 font-bold'>Malta</p>
                    <p className='pl-4 text-lg'>1. University of [university name]</p>
                    <p className='pl-4 text-lg'>2. University of [university name]</p>
                    <p className='pl-4 text-lg'>3. University of [university name]</p>
                    <p className='pl-4 text-lg'>4. University of [university name]</p>
                    <p className='pl-4 text-lg'>5. University of [university name]</p>
                    <p className='pl-4 text-lg'>6. University of [university name]</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Processing duration: 3-5 months.</p>
                    <p className='text-xs'>Though it may vary according to the university.</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Required documents:</p>
                    <p className='pl-4 text-lg'>1. bank statement</p>
                    <p className='pl-4 text-lg'>2. bank statement</p>
                    <p className='pl-4 text-lg'>3. bank statement</p>
                    <p className='pl-4 text-lg'>4. bank statement</p>
                    <p className='pl-4 text-lg'>5. bank statement</p>
                    <p className='pl-4 text-lg'>6. bank statement</p>
                </div>

                <div className='pb-4'>
                    <p className='text-2xl font-bold pb-0'>Overview of application process:</p>
                    <div className='text-justify p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, quod est adipisci 
                        doloremque cupiditate voluptates blanditiis nemo ad assumenda eligendi! Ea nihil tenetur cumque 
                        velit a quo voluptate blanditiis deserunt soluta cum nostrum ducimus, iure, temporibus eveniet 
                        quos rerum! Aspernatur, autem voluptate iure corporis dolorem laboriosam perferendis itaque repellat.
                    </div>
                </div>

            </div>}
            
            <Footer />
        </div>
    )

    return content
}

export default StudentVisa