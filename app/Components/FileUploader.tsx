import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'

function FileUploader() {
    const [file, setFile] = useState()
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div className="w-full gradient-border flex justify-center items-center">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                  <div className="space-y-4 cursor-pointer">
                      <div className="mx-auto w-16 h-16 flex justify-center items-center">
                      <img src="/icons/info.svg" alt="upload" className="size-20" />

                      </div>
                      {file? (
                          <div>

                          </div>
                      ):(
                          <div>
                              <p className="text-lg text-gray-500">
                          <span className="font-semibold">
                              Click here to upload
                          </span> or drop file
                              </p>
                              <p className ="text-lg text-gray-500" >PDF (max 20 MB) </p>
                          </div>
                      )}
                  </div>
            </div>

        </div>
    );
}

export default FileUploader;