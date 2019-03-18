var numSudokus = 100;
var sudokus = "AARQAACaAGBmAEAAADAAGmAALIHkAfAHBIAqAABSAAAAABEqAGAABwNxSHPkCiNyJbScPjNvMRGoSzLKJdMHHhDMKWELLCHEJFNFEzQYEfDSAAAUAACkBcBSBsNcAIPbAAMdDsAAAxAAAAAABGRQAKRQBwAAAAAAFoPDKJItCmNHSnLYNmEePlJYMdFFHHQRIXQhCXGuSKNkRoChLOMvEyHeAAIEBcAILcAFAABSACAYAABsAHAAFoAyAKAAAAAGAAApAAAAAAPyKoOLIJNFEKNRORIxDWRwGMLPDoDpFEGuQYGHILLLOSELMRSQQpSkPzKsNaAJPUBwJgAHQcAAJWAyPUABDwAAAAAABCAAJVAeAAAAAALcLcNYAAOOHFPjDlKcFHQhEJJZSUPrONEGSoGuHOCyRqJVMLDQKHJNMPMHPMLMBcABBIHkBIAJNYPdAKADBCAAJoBwACAAADBwPULSAUAGACADAAAAAAHZONFFIFHBQvOlPxGCLpEuPSLaDUIQEnSvDAQCLZLxSoHwLLCwMOSLAABTAuAIAJAAAAAAFoAFBmJMAGAABSAAAAACOMAAAAPULcRQFoEgJgFhKzQOLuIXNxLCQeHbCVPQJPJSGNDXSBDcMcONSRFIQULtRyHFEoJxQcNYAAAUASAAABHqPyAAAAAABoAAAoCkACLlAFLcNYDsABAFAOAABcQlNvCyIHJySfOXJcQAKRScEKNQDfKXCsGoNDHVMZNtFQPzJbReFPHWAAAwAAAFAHQIFoBmBwLcAAAAAARQAUAHBhAeNYHmBmRQAAAAAYAAAGFTCsKrDJGPQRGkLYDQMINmSxQTSbILJdFZMHNoIkHiSvMvEuKEQHNoAdAyAAJgAAFoAADyAAAAAoSYBcNYABAAAAHpSEAAAABYABBfAAAIAAPxCxMXKvSwGACeFQQbNkGhSgJROpEXNRPgJHSMKRCWFQJXLLGnMEPOLSAAAAABLlJoBSAAAAPWFoAHAyBIAAHkABAAAHAFNEAAACAiAAAKAALaCXGiGJMZLGMyLLFfPgGqSfOfFIHxIUPLPtCrRzNGSdQoCeFXIAOfHkACNJAAAAAUAABwAoJpAAACAABIAJAIAlAABwMaAABmAAAAAFAANiHxPMNJSyKXCXOYDeSHLHICGyGdFFQvMESBIjChMeFmFiQnKQQhGRNmDtNYAAAARQBSADAADsHmAIBIFoAAAAARACPUAAJnHkAAAAAABmAKGQFBOPSxKcRlMxSlQhEGIkHiDLHZDUKWLtIkQHPuKRJXCeFdOcPPLqGQBwKUAIAXBwAAAAAAHmAAAyAJAEAAAAJgRQQIAANRAAAADsBwAJBSKADpKWMOIHDMSnMiOLHwQnGqFJScPvGnKMRgQPEHNRPEOSFZDlHZJDKGPeBIAAJgAAAIAAFtAAAAANBmRQAAAUAHRQAyAoAAJhAeDUAAAAAAAGPhFJORKJONHEMyHVRcIkLpRNStIpLzHDRsCyOSRIKLEbDUJVDqKOFQAIABAHAfHkAAAABlABPeAbAALhAAAAAAAAAAAEBaAUAyAKArAABmAFFmMHIpODIkSyKaPJEXPhRrKsMBCnPSJLQhGAHALGCZSVEIQLDaHeMzBmAAAAACBIJCAAPYAARQBXBcAABwLcBNAAAABYADAAAAACAoAeAoRQNSExCiLKGxJLNlRKKqSFMzFXPvCjMeHBIMPLJIRdPtDDPCGiEeKaRhBIKAFyAAPUAARkAAAEAoAAABBsAHACAAAAPUAABcAAAFNeAADvRQDOOkKJGGKLQgRrRsDRMeGeMiPLRMGFKWDBJYQfNDFVITHzOIFdFXSJDUAADxFoAAAAAAQmBmJqBIJgBSBwAGIHAAAAAAGmAAAAHkPUAHAAMTPUMRFPHZKTDMOOQoHeJwFEKTDWDnPGIHPDIFNTGuRhFEIAQUSBRrMTQTABAeBmAUAABwAHAyAEAyBIOCAAJgAKRQGIBcAAAABIAGBmAAAJNYAFKVMIRNMESmCxHhDCMAQUItOLOjLRHwReGPLODTEjSgIURLFLFdNoGhNYAEBwAABmHpBmNYFoAAAKKUECAABcAAAAAAAJPyAAAADxAAMQAAAeOZMADqQeDlJHJXOeGOSyGAKbEGKvSvKRJVFBCZQEOaHOElLvMVSjQAAAAGAAHuAUBSAFAADvAARQAAAAOMFoNOABAIAAJqHrAAPUJgBcAAABOEDoQWICGNNDSdJTEFQPSbCVErOUHgNRErOUGOJzJTDXQCKqLMMwRvAABIAyJkAJFyBwAAAAAGAABzAmDsAAAAAAJgAAAKRQACPXBSBcRQAAPrDIOfKsPJGADXGNQgEwJdDbOKErJcJXMOKHMXJsSCRcQLMzHVSoEhDsLcAEAAAABmAAAANYAKJgDzAANYBiAICkAFIiAKAAAAFoAABcBoBIEfMvQWQnEuNRKsSCNkLpLREnSJNvDeOACqRzIoPlGRDkHBJKHXJYKpBcAACkJgACAJHqAAJgAAAARYBPAKAARQAAAHADPJAAAJADAAAAJgNYPCHfCqKLIuQvJcQnKMCpEdSgHDRiEuRsMeGFMdPJIFFTCnNJPiKGPNAAJiFyNYAGAEAAAAAAHmPUAABcAAEBAyBwAeAAAEAALcAKAHAAAABfRKLAGENnSAPsFDJNPPJERJMbHRMVFTSUCXIWCiOaSaMFGGKbKbFJDbNYAEAARQBIAyMVBcNYHkAAAJAAAeAUAAAHPUADAAAAAAADLmEuRQAAODLWFaRsOhIlMVHSPLIBMEKTLOIXCXHcDBQgDHQrSGQvEjLrEuRgHOAAAABmAjAHAAEGAyADLcADAAAAAAHsAyQcFqAAABAAAUAANhAAFUAoOoGMLTRzLtPsEGSWMxNGCnSVDlLAJAIpQlGAQOPLEbKBIUPJHPFZCqBmFyPUAAAAAAGwDwAAAAAyBwAAAAAUAAAJADRQLIBIAAAAJiLeBmHlFiGDQsDTSgEaHEFORfNvQYCtJzIVMEJSCZOZSFLKHDQFMRLUMcPNJNAALcAADsBcAoCyAABcAAAJLwNYPWAAAABSFoPUAAAiAKAAAAAJJmAASqMREtEcPFCtCyFhPGJNGvMDPNQeHzMBDSHiQeRhKOJxIWSaGlKGQnBmAtLjAAFoAAAANYFxFqAEAAAAAASsBSBIAAMGBcJgDsAABmPZBwAADlQNMDNyHbQNIqNyGHHSReOcKpEdSwSmKwCcMPJOKzEJMdJeQNDXFDGIRQAAAEAAAABcAtADAAPoAKAoAHAIAAHAAyAAAAAAChAyDsAABcGcGNSqDINmMIRLSyCpNvMdPxIBEpJxMOQnHASQJAFhKzChIoFdLUPBGiAAABAAAEAUADBSADAyBIDzJgAAAARQRQAoBcAAFoAALIAADsAKBSAkQESPNwCyOANRFTIvDCHEFlKVONQDSaRpCqHXNVHSHzLLLqFTHwLHQEAUAAPyAAAAAAPaOMBwAAAABoAEBjFoAABIBSAAACAAAACCAyFyAyFUIJNPQFSjGQKsQEORCZPDJuNQNSFbGDCwSbJKKxQAONEoDUSRGFIrFaAAADAKBwNYAEAEAJJnPnAAAABSAAAAADAABEAABjADJnAABcDsBIBmOYQLLvDoNxQCHULvKHPnIoHIMzEXSMIHSqDASFLPFDKvHcJNEeDIPPDsMuBBAAAAAAAAADNZHnAAAUJgNYAEBwAAAABcFoHtAoAFLcNYBcDsEGNCSRSBKVQeQYFhONJFDNKIKwOEDmCZQWHMNJGPIDGeRfNLPLJSEbAAAILcRQAAAUBwBUADAeAJAHAACuAAAAAeBIBmAAPCAyPaHkAKAAJgGNICNDSzHBCUCqSkQVKONNEJFJDBGkQnEaSdNRKVPCOYRMIPICNvLYAANiAAJgAADsAAAABQBSHaAAAAAAAJFqLjAFQSRQADCkAARQDsAGAASgNkKOJuQfFlNvIrDMJDHfNGNJCUHPHcNLHzQYSFNvCrEeSUEfLEQJHkOgBwAAAARTAAAAAILfByAAAAMuFoBcAAAAJoHqAeABAUAHAEAALcIXOoCwPkEuSlNxHbJAMdDaPOSGMzHRDfSHKGLGIAEfGxKJQPFiQFLrADAAAEAAAAAJBSEAAjAIAAHkAAKUAIAAANBSKAAABmAGBnAACDAAAAFDDDPEQTOGFJJLFICfLuSkIlOEKaRiSJPhMwKENLHbHWJXKHDpGNQOAFFoAABSDsAELcJgNYPKAAFoAAAAAGBcAAHkAUAJAABIBcBUPUAoJgRfHKMEHOFkCyMSJyOLPQIFHVIjQFFkFXSdIBCXMjQLKsDbSkQHOOKpAKAAAGRQLcAFFoCAAAAAAeAAOMAABIAUAAOMAAKyAULeAAFyAAAARQEKOZJcSmNGCfHBDmQoLYIVFVOPEKKxPpSdOPIXKzMEMcQRGFDfGOSSBJAAAAAAAABjAEFoNOAABIKULcJWAAAANiRuDsRQAAJWABAyAAAAAKOhQRGNRnDAJTQWHINPDXFDKcMOJbDQKWNqSAEHSBQgJdNFEtHWKENrHsFoBTAAAHAARQAAPoABAIFxAALcAKDyAAAAAHAoAAPUBSAECQAGRQIqGRMvLoLPJZSlItPtONEyHFHVNSNkFkNlKcKRSGDeQlDTEaCUQESVAGBXDvAAAeAAHmAAAAPeAALcBmAIFoAAAABcBwBtAAAAHlAABSAGAFSyDTEjOXEaSgIQNNKzPhKWNVNSNqGoKHSbDcCpHhPuFIIjOLHPPuHzBSACHkAAAAAAAABuACAYBIRGAFAEABAADsAAAoAAFwAGAFAEPVLcNYNCCwIXEzIUDfHxPSMcCUKvRJSdHUFLHXELKaKWSjHEOIPtReRHMTNxAHACAeJWAKBcLcBSBqAAAAAAQIDsAGAJABKUAKLkAAAAADAAAABmADLPSGMHJYGEPFMHQrFiDULMGRQNEfDUGROhKcRdMEIpOoIlRcEuDpQfRQFoAAPVBSAELcBqAMAAAGBmBSAAJgAIApAAAAAABXBIPUAABwAAAASGGGOcQTMwRyMNLWPgEFOcJeJISvKBLaEhHDHUDNFPOpPtCnCVIVNNAGFoAAAeAABwCAAAGwAAPUAAACAKSELcRQJgAAAcABAAAeLcADAEAcFkGnQqOHJSDkDcFTHBGlQhEJQUNlSKMvSGLLSfKIIPIMChMjJtNSOAAUPUAyBwAAAJAIFoAAAABwSiGABmAAHkAAAAAAAeHkAAExAGAGABAINwQlGnCxJEQlSgGDEnNJCUSlGAPQLMJdLLLoFLMOJbQRExCgKQSFOAAAAHAAAAADAbAIAyIOAeAAEBBwPUAAMFAAAAADJpAAJmAAAEBSABBcGyIBSWIjSvMDPSEwIPQFDJEpCpRIOjMFHKPjFXKdDUJwOAHeSmMHLKQSAGFoACAAAyAiAAAJAAAIBmAJAAAIBSHkLfDsNJAAAAACAoAACFAAQTRqHKPMQCDAMKJxFdDHEyJdINOjJyLGJXLzEnNJRvRgHIQNHVCtOiAAFoBIAGAIAAAoAGSOANAAAGAARGAFDsBSBwAARQAAAAACAIBNAEAAKBGlQjSAOeHwOUEISRPhIJPQMyRHGNEzMxDcJOSfKLDpKMMYHBDcFTBWRQAALwAANYAANYHnDsBIRzAGAAAUAJIOLcAAAEAJAfAAAAAABSAILCRdFaLzQNPLDqNyIlEnDMRzGELZPsQbIQLtPCGqDNIPNNLASdFLGkAJLcAKAAAKMQAHAABcAAAHACFoHkAIBwAAFoAABRNYKEBSAAAAAAAAIrNHEJFXNnMZLtRoLLSgChIkHIIoDqCpRIHMPzKxNwKEHOSZPQEhQDAHAyAAPUBwAiBwAeBUAAAFHkJhAALkAABIAAAUAQAAAeAIAFAARQAAGjQUSZQeDpKODDMKQoNRFZIBKzGlMEFYOhGvRsJwOPOIIMDnHzSlFaLcAABSAHAJAKArAGBuAJJgHkAASEAADsAABcBSAAAoAAABDsAAAHBJNTDcHIPvGvLqCnNyLaGHLGIKOoSGCfEuLpPJSjFFQLIURHExLKIVSZBmAAAFAAAoLcAFAAAAPUAABIDsPaAyAORQPoBcAKAAKUNOBcAGADAKPMHECpCiKdMwIxFLSCQVCUOpFTQEIjLqSVPrHXHzFkKVNQHXRqPDJuBmFoHuAKAoAAAUAAJjHtAyAGADBSACBIAAAAAAAHBQABAIAEAAAGBwLYHSIBGGORMFNwDNLLJLErQEDbMySQFFRJONSGJxHEMbSCFOQFIKDnPUFoAPAUBmADBIAAHkEqRQLcAAAAAHFxAAAAAAAAAAAABPKAAGBdAARKGONnCVPOQfOjPjJYExSHNFMYCwSBGHNCEuJOKTDURvIzKILEFVGlRaAAAGBSAABcBcAJAAAFANAABtAAAOADAAAAAABwKdAABIAAAAAyBTRcPFIULCMHSuHWEpDBFFHxPSRNKGGCCnRNFFMODQKdOXScPrINGuMvHkAAAABcAABXAAAzBmABADAUNbAARUAALSBIAEAAAAHGHkDyAAACABITSqLoDhFEHLMDGnJeSZQLKHOZCWSwQKLZDHEGNJOLHOIDEwLYOEQJAJFoAAFoBcFAAHMQRQAAAGBSBSRQPVPUABAABwAUBcAAAAAABQAAAyMjGAOUGCPJFFFbMVRdRlQYHKLERyPpQLFLLYCfILNNJYKwChOoDlIkAAAAAALkAJABRTAHAUAARKAABcDsAHAGNZHkAeAUAKBmAALcABAAAFDTNGHeMEGlOXSHDBPuGFRKKqJVFFChEwODJVOGKGRiLUICMxQdSlElEAAeJqAANYAUAyBcRQAUAIADHkAAAABYAAABAAAAAARTBwLcNEBSACFIRyJxHeOXPuDBNGRyKJICOjIPKvFdQsFhIjNkQOHfSHCVNCNJHPCmJgRSAAAAADNsHkAKPUACPUAABIAABSPUJgAoAoAAFyFoBIAANdAEAAKSSkDILvJPNxILLrRJCwQPSAScGJLGQpLYEhEmOeGHHRFJIpPPCeNGFtAHAALcAyAAAAABFwBcAALfAUAENYHkBiAAACAAAABINYHlAAAwAAHfPvDILuIlFlFONPGuStLAMTKGGCPJIVSyJsOODNQDQlOHIFCxEoSoAACQAGBVPdAAAIAAAAAABcAAAyAABwNYJgBmAeBIHkBwAARQAxAFFqJbCTQsMxQbEhEKJIKTRqHROaGqNVCYPBKWNRKMSgIBDLEaSxQRNnGyABPUMuAAAeBqAAHkAARQBMAAAOFKAAAAAANgAIBwAABSAAByAGAFAJGdRIMzOYMHRKQlIpEFSzHAKBJuFSSALzJzOUFmCqGtJHSvDGCgNxJVLcAAHkBmAIOCCiBSAAAUQVAANeAUAAAAAABmABAeJkAADsBSAAAAACMzHbIMJYKwODCiJEMjRoQVDLOcCZQLPhOSFjFBSBLMLREGHMGjNJRcAAJgNZAJAELcAAAGSOAAAKAoAURXAIAEAFFoDsAeBIBwAAAAPUBJAAIuLaODGvDSNGPBGOSSLGLpEpLzSLJyReFZHMEnQHDJCgIkRNRLOhIHBCBmAKDsPUAANOKUAUAABCAAAAAAStAADsNYABAAAIAAHGAAAAAIAyGqPMPkEJQfLWNWKVGPPJCyMIIJMNStDHFdORKLRqJKQKHLDNSoICEtBGGIBICDAoAIAAAAAABSAARQAAAAAVAGAAAFAeNOAAAAAHPUDsAABsSWGJIzDLKdEeGMQsJzLADHSwRJOaLxIASuHLOHNWCmMZEJQVFVITPQAAAyABABAAJjDsPUAABIAAAANYAGAABcADCuAMAARUAEAUAAAGSsAAGkMjNtNPOOLLExPzMZDJJeEdNvJwJeJVFNDAPgHBSmRyCXQhLESwGAAVAENEOgAABwAAADAFAAABAAAABcBVAAAyBIAAAABmAJAHACByAAHqGJLCNNOlPxCeJeDHNxSUODEoEGSyLBQFIkSZMTEHRNLRMXGADQHiIoFoAJAGAAFoAAAAPVAFBwHsAAAIACGlAeBIAAPUBSJgLlAAAAAKAEAAGnOVFaFbGsReSKPpOHDnIWMwOoJsGlIQSfDCPsMxLTNDDdIHJtFiQjAAAIAEPUBJAyAoDsAKNYJgADKABcLcAGAAAoAyAoAAABACAIAABFAAEHSqHAQFItSQMZEbPlPOJwFXKDPENPDeGRORSQQLDUJDNQKSHEDBINLcAUAoAHATPUAwAABwAADsOCAANYAAAABcAJAeAAAGAAFqAEAOAyAINPPrKbKHIDQfGkKvDkJSFfOHSQOGNFDRNJINOLCsEwQhHIReEGSUHOHkBmABAUABBSAAACAjBcBIAEAAAABcAJNcADPUJgAABmAvAUBIAAAHIVRLFBKGIPSqRiMwITPBFDLWMTDDPCEzPELpQoJwGlDnGjPuHARsDBAIBnAANYAAAKAUMGJWAAPUNYACAAAAJkBIAABPSEAIRQAAAAAoFoAGIWPLMBPQKEPhCVMOJdLvQVOOHSIBKxLCFJHRFHSJCiSRDeFOQJHISUAQAAFwJgAABTBVAABmAABwLwBNDsAAAABaAADsAAAKAAPYAAAANiAxIARrGuLUHWJDQpIjFkHZCpMDOlFhDcCUNCRzEnKxPhSPQCOiMONkKdAAFoAyBcBwAUAJBcAAFoAJAAAIAEABJmAAAAAAAeAGAAAAADNiAyJMCXGiSWNJDpGMIXFZDLHHPxMVFmKsODKaNlRIQWRvFQSaJKJtNlMcJVJgBwAeAKAELlBcAGBwAANYHkACLdAAIXAAAKAAAAAANYSOAAABADBcLYDQQCEJHUMjHULYDQDJOLIMQoMRHfIXPtNoMiEJSHOPSWFBRlIvLPBcAMADAFAAAAAAAoAGBmHkBcBTBcAJAUBbMQAoAHAAAGBwJgAAAAAAPELoSRSdOKHwGASJQsNRIFPFJDLOEfKIHPMRCtExHEQEDmKHExQfDmAIFoAKNbAAAABmBXAAAoBIDYFoJgRQBHAIHkAAAKFoRWAAAAAAACAAKIHgNmOjJNLUDmFPQfEnSbDdHRKbRqMjCYIVJELvGuSAQWFLPjOEMZAHAAAZRQBIAALeJCABAAAUAoAAAeDsBwNYADBlAAAAAzAAAHAAAIJgQPRdMBRfQeOGMIJHRHHOKJCqLWMHFSCWPESRJVDBGyErHgJTOjEoJzAeAJAURQAIAyIFAAAAAHAoBwBwJgAeLIAAAHAABqAKAADsAAAAHGRQQDNrMASoIMGnIFMdQvHDSGDdCtLPEcLKCgJdMdRKNkPSFBKXEGHLSgAABnAoAKAEAIACAAAAKyBzHkBIAHAAAASOABFoAIBSRYFoAyLcAAAAQEPLElNnMAHiJYQDLtLHDbIuDHEnLRFYSUODGJKwSmSMHIDAMhIDPrAAJgAeRQAAACAGAEBHBmAPAABIAHABAwAAAAABBiFoAAAAPAAAFoAUEGLaMNSxMxHwHMCUQbPNHzFIKqQFSFCsSaLBIFPGHfMPErPEQZGlCWBYRGAAPoJgFoAANYAAABAFLcKULwAAAAAHPXAAAABwAAAAACNJAAAAHMRKEHPxJwGjCyOESgODSxMAKcLzPLSaCrQVFhIqDUIBHFLKNJFLIXAAAAHkGyAKPUBwAAAyAeBmECAOAAAIAAJgAAHsAAAAAABHAUEqAGFoPFSaIPGyHzRNCtHOMcQFNSEHJuEdSgRqLJOPJeCTLEMxQbCUErOSHZAyFoPGANAAAAAGBSFoBMAAAAAAAHHkAAAIBBAeAAJhACAEBIAALcDsIrGAPGNlQORpPuSnGCScEtDWHVDLJYFLJeMdMOOBKVDkKOQjKbNFEfAALjAADsAoAAAIBwAdAAAEOeAABIAAAFACAAAUAALcCkAARTAAAKBcSSMDPzEXQRKvOoCfINLoHeOeJTKpHcHfPCCqPxJFLrCqEySlLBRgFYKKDsRQAAAABcDsSiAjCDAAAyAAQSAGAAAAAqAEAAAAAaAIAAHQAUAAKLFYSfNDCfFYEoSoCfDLGeQbJYQZGEQVNPOOReOjKINyJyJZHVINMvBwLcOLAAAAJgBcDsBwNYAARQPeAGAyAUAAABRQAAFqAAAoAAAAFyBSCmNJOLHgDSKILPFhDIOlPpSHPnIUExIHSVNFSmKwGAMHOORLEyGHJIAABIAKAAAEAARQAAAZAKAAJgAERQAAFeBFAwAABcFoFoAFBSAvNOAAJHFJPhPpKOOpSAQnIJNqGiLUMeRsChFhDBMYDNPCGqHSHzSoKbNRFVHkAAPUAAFwNYAAAVAGAFBSAAAAAAHmABAoAjBlAAFoFoAAAAJkAABnIkPQPhRgGuNwOKIFSUElMxDhNRDdJEQnEpMLDhKqGjGPReKwKsQFFfQcAOAHDsAHAAAAFoJgBlAoBwAAPUAANYACAEAEAANdCDAUAAAAAABmQhEGSBFhKvICJDHiKGHZOSCwKWPzNDNoSQHURoDbOlDBMFQLMOJHFfNgAABNLcAePYAUBsAAAAADNYBmBSAABIAABfKyAAAIDsHkFoAAAAAKOKEGSdLvKRPsIJRMChQUMTPLHeDWMcDLRpJPKzHFEoFaIjHPSHPCJwLcFeAAABAAAFAACBLlAlAARQLSAAABAGAANYAUASAAPZADAAAANYAiMdFiDWSFQsGNPCCfMZIVKpSuLaGPItEIJVOZGMLuLZQrSHEIDNOYQCAEACAAAAAAHGQmAEACLeAAAeABJgAAJgBsAoAJGwABAKAALcAoRQAAScOEPjCVNNHKQpCySaNQQJKRJNLBFkKRFkCsOfHEIFGGILMjEmRfPD";